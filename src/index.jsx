import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


let data = [
    {id: '1', content:'吃饭', complete: true},
    {id: '2', content:'睡觉', complete: false},
    {id: '3', content:'打豆豆', complete: false},
];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));