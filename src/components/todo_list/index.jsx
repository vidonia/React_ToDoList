
import React, { PureComponent } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './index.css'


export default class ToDoList extends PureComponent {
    state = {
        todo_list: [
            {id: '1', content:'吃饭', complete: true},
            {id: '2', content:'睡觉', complete: false},
            {id: '3', content:'打豆豆', complete: false},
        ],
    };

    completeList = []

    todoListAddItem = (content) => {
        let list = this.state.todo_list;
        const item = {id:list.length+1, content:content, complete:false};
        list = [item,...list];
        this.setState({
            todo_list: list,
        });
    };

    todoListSelectItem = (item) => {
        console.log(item.complete);
        if (this.completeList.includes(item) == false) {
            this.completeList.push(item);
        } else {
            this.completeList.pop(item);
        }

        let list = this.state.todo_list;
        
        for (const index in list) {
            const tmp = list[index];
            console.log(tmp.content, tmp.complete);
        }

        this.setState({
            todo_list: list,
        });
    };

    render() {
        return (
            <div>
                <Header todoListAddItem={this.todoListAddItem}/>
                <List todoList={this.state.todo_list} todoListSelectItem={this.todoListSelectItem}/>
                <Footer />
            </div>
        )
    }
}
