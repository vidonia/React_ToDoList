
import React, { PureComponent } from 'react'

export default class Item extends PureComponent {
    handleItemClick = (event) => {
        const item = this.props.item;
        item.complete = event.target.checked;
        this.props.todoListSelectItem(item);
    }
    
    render() {
        return (
            <li className='item_content'>
                <label >
                    <input type="checkbox" defaultChecked={this.props.item.complete} onChange={this.handleItemClick}/>
                    <span style={{paddingLeft:10, textDecoration:this.props.item.complete?"line-through":"none",}}>{this.props.item.content}</span>
                </label>
                <button className='item_delete_btn-todo_list_button'>删除</button>
            </li>
        )
    }
}
