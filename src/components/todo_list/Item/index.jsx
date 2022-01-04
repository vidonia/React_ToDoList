
import React from 'react'

export default function Item(props) {

    const handleItemClick = (event) => {
        props.todoListSelectItem({
            ...props.item,
            complete: event.target.checked,
        });
    }

    const handleDeleteClick = () => {
        props.deleteTodoItem(props.item);
    };

    return (
        <li className='item_content'>
            <label >
                <input 
                type="checkbox" 
                defaultChecked={props.item.complete} 
                onChange={handleItemClick}
                />
                <span 
                style={{
                    paddingLeft:10, 
                    textDecoration:props.item.complete?"line-through":"none",
                    }}>
                        {props.item.content}
                        </span>
            </label>
            <button 
            className='item_delete_btn-todo_list_button' 
            style={{display:props.item.complete?"block":"none"}} 
            onClick={handleDeleteClick}>
                删除
                </button>
        </li>
    )
}

