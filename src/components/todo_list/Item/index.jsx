
import React, { PureComponent } from 'react'

export default class Item extends PureComponent {
    state = {
        item: this.props.item,
    };

    handleItemClick = (event) => {
        let item = this.state.item;
        item.complete = event.target.checked;
        this.props.todoListSelectItem(item);
    }

    handleDeleteClick = (event) => {
        this.props.deleteTodoItem(this.state.item);
    };

    render() {
        return (
            <li className='item_content'>
                <label >
                    <input type="checkbox" defaultChecked={this.state.item.complete} onChange={this.handleItemClick}/>
                    <span style={{paddingLeft:10, textDecoration:this.state.item.complete?"line-through":"none",}}>{this.state.item.content}</span>
                </label>
                <button className='item_delete_btn-todo_list_button' style={{display:this.state.item.complete?"block":"none"}} onClick={this.handleDeleteClick}>删除</button>
            </li>
        )
    }
}
