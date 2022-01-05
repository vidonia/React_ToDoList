
import React, { PureComponent } from 'react'
import Item from '../Item';
export default class List extends PureComponent {
    render() {
        const {todoList, updateTodo, deleteTodoItem} = this.props;
        const items = 
        todoList.map(item => 
        <Item 
        key={item.id+item.complete} 
        item={item} 
        updateTodo={updateTodo}
        deleteTodoItem={deleteTodoItem}
        />);
        return (
            <ul className='todo_list'>{items}</ul>
        )
    }
}

