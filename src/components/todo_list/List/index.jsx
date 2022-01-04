
import React, { PureComponent } from 'react'
import Item from '../Item';
export default class List extends PureComponent {
    render() {
        const items = this.props.todoList.map(item => <Item key={item.id} item={item} todoListSelectItem={this.props.todoListSelectItem}/>);
        console.log('=======');
        return (
            <ul className='todo_list'>{items}</ul>
        )
    }
}

