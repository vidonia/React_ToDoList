
import React from 'react';
import AppForm from './AppForm';
import AppList from './AppList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:props.data,
            selectedItems: [],
        };
        this.onAddItem = this.onAddItem.bind(this);
        this.onSelectedItem = this.onSelectedItem.bind(this);
    }

    onAddItem(item) {
        let data = this.props.data;
        data.push(item);
        this.setState({data:data,}
        );
    }

    onSelectedItem(item) {
        const data = this.state.data;
        this.setState({data:data});
    }

    render() {
        return <div>
            <h1>ToDo List</h1>
            <AppForm onAddItem={this.onAddItem} 
            count={this.props.data.length}/>
            <AppList 
            data={this.state.data}
            onSelectedItem={this.onSelectedItem}
            />
        </div>
    };
}

export default App;