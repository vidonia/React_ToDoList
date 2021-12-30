import React from 'react';
import './app.css';



function AppTodo(props) {
    return <div className='list_content'>
        <input type="radio" />
        <span style={{paddingLeft:10}}>{props.item.content}</span>
    </div>
}

class AppList extends React.Component {
    render() {
        // const todo = this.props.data.map({item}=>);
        const items = this.props.data.map((item) => <AppTodo key={item.id} item={item}/>);
        return <div>
            {items}
        </div>
    }
}


export default AppList;