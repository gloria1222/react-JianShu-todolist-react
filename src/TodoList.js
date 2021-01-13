import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <div><input /><buttom>提交</buttom></div>
                <ul>
                    <li>English</li>
                    <li>React</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;