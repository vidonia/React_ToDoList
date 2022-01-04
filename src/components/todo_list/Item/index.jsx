
import React, { PureComponent } from 'react'

export default class Item extends PureComponent {
    render() {
        return (
            <li className='item_content'>
                <label >
                    <input type="checkbox" />
                    <span style={{paddingLeft:10}}>{this.props.item.content}</span>
                </label>
                <button className='item_delete_btn-todo_list_button'>删除</button>
            </li>
        )
    }
}
