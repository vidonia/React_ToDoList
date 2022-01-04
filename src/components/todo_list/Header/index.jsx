
import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    item_ref = React.createRef();
    handleAddBtnClick = (event) => {
        event.preventDefault();
        const input_content = this.item_ref.current.value;
        if (input_content.length <= 0) {
            window.alert('内容不能为空！');
            return;
        }
        this.item_ref.current.value = '';
        this.props.addTodo(input_content);
    };
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Todo List</h1>
                    <form className='header_content'>
                        <input type="text" className='header_input' placeholder='Todo...' ref={this.item_ref}/>
                        <button className='header_add_button-todo_list_button' onClick={this.handleAddBtnClick}>添加</button>
                    </form>
            </div>
        )
    }
}


