
import React, { Component } from 'react'

export default class Item extends Component {
  
    state = {
        item: this.props.item,
    };

    handleItemClick = (event) => {
        this.props.updateTodo(this.state.item.id, event.target.checked);
    }

    handleDeleteClick = () => {
        this.props.deleteTodoItem(this.state.item.id);
    };

    handleMouse = (mouse) => {
         console.log(mouse);
    };

    render() {
        const {item} = this.props;
        const {complete, content,} = item;
        return (
            <li className='item_content' 
            onMouseMove={()=>this.handleMouse(true)} 
            onMouseLeave={()=>this.handleMouse(false)}
            >
                <label >
                    <input 
                    type="checkbox" 
                    defaultChecked={complete} 
                    onChange={this.handleItemClick}
                    />
                    <span 
                    style={{
                        paddingLeft:10, 
                        textDecoration:complete?"line-through":"none",
                        }}>
                            {content}
                            </span>
                </label>
                <button 
                className='item_delete_btn-todo_list_button' 
                style={{display:complete?"block":"none"}} 
                onClick={this.handleDeleteClick}>
                    删除
                    </button>
            </li>
        )
    }
}


