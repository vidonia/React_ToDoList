
import React, { Component } from 'react'

export default class Item extends Component {
  
    state = {
        item: this.props.item,
        onMouse: false
    };

    handleItemClick = (event) => {
        this.props.updateTodo(this.state.item.id, event.target.checked);
    }

    handleDeleteClick = () => {
        this.props.deleteTodoItem(this.state.item.id);
    };

    handleMouse = (mouse) => {
        this.setState({
            onMouse: mouse,
        });
    };

    render() {
        return (
            <li className='item_content' 
            // onMouseEnter={()=>this.handleMouse(true)} 
            // onMouseLeave={()=>this.handleMouse(false)}
            >
                <label >
                    <input 
                    type="checkbox" 
                    defaultChecked={this.state.item.complete} 
                    onChange={this.handleItemClick}
                    />
                    <span 
                    style={{
                        paddingLeft:10, 
                        textDecoration:this.state.item.complete?"line-through":"none",
                        }}>
                            {this.state.item.content}
                            </span>
                </label>
                <button 
                className='item_delete_btn-todo_list_button' 
                style={{display:this.state.onMouse?"block":"none"}} 
                onClick={this.handleDeleteClick}>
                    删除
                    </button>
            </li>
        )
    }
}


