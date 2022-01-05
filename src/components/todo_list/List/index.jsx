
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item';
export default class List extends PureComponent {
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodoItem: PropTypes.func.isRequired,
    }
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

