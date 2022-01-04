
import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        return (
            <div className='header_content'>
                <form>
                    <input type="text" className='header_input' placeholder='Todo...'/>
                    <button className='header_add_button-todo_list_button'>添加</button>
                </form>
            </div>
        )
    }
}


