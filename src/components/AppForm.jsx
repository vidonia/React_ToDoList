import React from 'react';
import './app.css';


class AppForm extends React.Component {

    handleSubmmitClick(value) {
        console.log(value);
    }
    render() {
        let value = '';
        return <div className='form_content'>
        <form>
            <input className='form_input' type="text" placeholder='ToDo...'/>
            <button className='form_submmit_button' onClick={()=>this.handleSubmmitClick(value)}>添加</button>
        </form>
    </div>
    }
}


export default AppForm;