
import React, { PureComponent } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './index.css'
import axios from 'axios';


export default class ToDoList extends PureComponent {
    state = {
        todo_list: [
            {id: '1', content:'吃饭', complete: true},
            {id: '2', content:'睡觉', complete: false},
            {id: '3', content:'打豆豆', complete: false},
        ],
    };

    todoAll = false;

    addTodo = (content) => {
        let list = this.state.todo_list;
        const item = {id:list.length+1, content:content, complete:false};
        list = [item, ...list];
        this.setState({
            todo_list: list,
        });
        this.todoAll = false;
    };

    updateTodo = (id, complete) => {
        const {todo_list} = this.state;
        let done = false;
        const updateList = todo_list.map((value) => {
            if (id === value.id) {
                done = complete;
                return {...value, complete}
            } else {
                done = value.complete;
                return value;
            }
        });
        this.todoAll = done;
        this.setState({
            todo_list: updateList,
        });
    };

    deleteTodoItem = (id) => {
        let todo_list = []
        this.state.todo_list.forEach((value)=>{
            if (value.id !== id) {
                return todo_list.push(value);
            }
        });
        this.setState({
            todo_list: todo_list,
        });
    };

    todoListDone = () => {
        let list = []
        this.state.todo_list.forEach((item)=>{
            item.complete = !this.todoAll;
            list.push(item);
        });
        this.setState({
            todo_list: list,
        });

        this.todoAll = !this.todoAll;
    };

    todoListDelete = () => {
         this.setState({
             todo_list: [],
         });
    };

    render() {
        return (
            <div>
                <Header addTodo={this.addTodo}/>
                <List 
                todoList={this.state.todo_list} 
                updateTodo={this.updateTodo}
                deleteTodoItem={this.deleteTodoItem}
                />
                <Footer todoListDone={this.todoListDone} 
                todoListDelete={this.todoListDelete}
                todoListLength={this.state.todo_list.length}
                />
            </div>
        )
    }
}
