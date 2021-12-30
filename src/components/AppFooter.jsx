import React from 'react';
import './app.css';
class AppFooter extends React.Component {
    render() {
        return <div style={{display:'flex', justifyContent:"center", }}>
            <button className='form_submmit_button' style={{margin:10}}>完成</button>
            <button className='form_submmit_button' style={{margin:10}}>未完成</button>
            <button className='form_submmit_button' style={{margin:10}}>删除</button>
        </div>
    }
}

export default AppFooter;