import React, { Component } from 'react'

export default class Footer extends Component {
    handleAllDoClick = (event) => {
        this.props.todoListDone();
    };

    handleDeleteAllClick = () => {
         this.props.todoListDelete();
    };

    render() {
        if (this.props.todoListLength <= 0) {
            return null;
        }
        
        return (
            <div>
                <button className='todo_list_button' style={{width:70}} onClick={this.handleAllDoClick}>全选</button>
                <button className='todo_list_button' style={{width:120, marginLeft:20}} onClick={this.handleDeleteAllClick}>删除全部</button>
            </div>
        )
    }
}