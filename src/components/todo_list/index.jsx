
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
    doAll = false;

    todoListAddItem = (content) => {
        let list = this.state.todo_list;
        const item = {id:list.length+1, content:content, complete:false};
        list = [item,...list];
        this.setState({
            todo_list: list,
        });
    };

    deleteTodoItem = (item) => {
        console.log(item.content);
        let list = this.state.todo_list;
        list.pop(item);
        this.setState({
            todo_list:list,
        }); 
    };

    todoListSelectItem = (item) => {
        console.log(item.complete);
        // if (this.completeList.includes(item) == false) {
        //     this.completeList.push(item);
        // } else {
        //     this.completeList.pop(item);
        //     if (this.completeList.length == this.state.todo_list.length) {
        //         this.doAll = true;
        //     }
        // }

        // let list = this.state.todo_list;

        // for (const index in list) {
        //     const tmp = list[index];
        //     console.log(tmp.content, tmp.complete);
        // }

        // this.setState({
        //     todo_list: list,
        // });
    };

    todoListComplete = () => {
        console.log(this.doAll);
        let list = this.state.todo_list;
        for (const item of list) {
            item.complete = !this.doAll;
        }
        this.doAll = !this.doAll;
        this.completeList = [...list];
        this.setState({
            todo_list: list,
        });
    };

    render() {
        return (
            <div>
                <Header todoListAddItem={this.todoListAddItem}/>
                <List 
                todoList={this.state.todo_list} 
                todoListSelectItem={this.todoListSelectItem}
                deleteTodoItem={this.deleteTodoItem}
                />
                <Footer todoListComplete={this.todoListComplete}/>
            </div>
        )
    }
}
