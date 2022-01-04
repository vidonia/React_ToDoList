
import React, { PureComponent } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './index.css'

let data = [
    {id: '1', content:'吃饭', complete: false},
    {id: '2', content:'睡觉', complete: false},
    {id: '3', content:'打豆豆', complete: false},
];

export default class ToDoList extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <List todoList={data}/>
                <Footer />
            </div>
        )
    }
}
