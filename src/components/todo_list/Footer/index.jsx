import React, { Component } from 'react'

export default class Footer extends Component {
    handleAllDoClick = (event) => {
        this.props.todoListDone();
    };
    render() {
        return (
            <div>
                <button className='todo_list_button' style={{width:70}} onClick={this.handleAllDoClick}>全选</button>
            </div>
        )
    }
}