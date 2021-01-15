import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        if(nextProps.item !== this.props.item) {
            return true;
        }else {
            return false;
        }
    }

    render() {
        const {item} = this.props;
        return (
            <div onClick={this.handleClick}>
                {item}
            </div>
        )
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

 TodoItem.protoType = {
     item: PropTypes.string,
     deleteItem: PropTypes.func,
     index: PropTypes.number
 }

export default TodoItem;