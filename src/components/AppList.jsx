import React from 'react';
import './app.css';

class AppTodo extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectedItem = this.onSelectedItem.bind(this);
    }

    onSelectedItem(event) {
        let item = this.props.item;
        item.complete = event.target.checked;
        this.props.onClickItem(item);
    }

    render() {
        return <div className='list_content' style={{textDecoration:this.props.item.complete==true?"line-through":"none"}}>
        <input className='item_checkbox' type="checkbox" onClick={this.onSelectedItem} defaultChecked={this.props.item.complete}/>
        <span style={{paddingLeft:10, }}>
            {this.props.item.content}
            </span>
    </div>
    }
}

class AppList extends React.Component {

    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(item) {
        this.props.onSelectedItem(item);
    }

    render() {
        const items = 
        this.props.data.map((item) => 
        <AppTodo key={item.id} item={item} onClickItem={this.onClickItem}/>);
        return <div>
            {items}
        </div>
    }
}


export default AppList;