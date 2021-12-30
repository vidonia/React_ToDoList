import React from 'react';
import './app.css';


class AppForm extends React.Component {
    render() {
        return <div className='form_content'>
        <form>
            <input  type="text" placeholder='新增'/>
            <button>添加</button>
        </form>
    </div>
    }
}


export default AppForm;