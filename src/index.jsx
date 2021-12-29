import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


let data = [
    {id: '-1', content:'默认数据', complete: false},

];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));