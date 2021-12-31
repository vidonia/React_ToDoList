import React from 'react';
import './app.css';


class AppForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content:'',
            ref:React.createRef(),
        };
        this.inputChange = this.inputChange.bind(this);
    }

    handleSubmmitClick(event) {
        event.preventDefault();
        const content = this.state.content;
        if (content.length <= 0) {
            window.alert('输入内容不能为空');
            return;
        }
        this.props.onAddItem({id:this.props.count+1, content:content, complete:false});
        this.state.ref.current.value = '';
    }

    inputChange(event) {
        this.setState(
            {content:event.target.value,},
        );
    }

    render() {
        let value = '';
        return <div className='form_content'>
        <form onSubmit={this.handleSubmmitClick.bind(this)}>
            <input className='form_input'
            ref={this.state.ref} 
            type="text" 
            placeholder='ToDo...' 
            onChange={this.inputChange}/>
            <button className='form_submmit_button' 
            type='submit'
            >
                添加
                </button>
        </form>
    </div>
    }
}


export default AppForm;