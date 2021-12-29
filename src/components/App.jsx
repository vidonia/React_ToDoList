
import React from 'react';
import AppForm from './AppForm';
import AppList from './AppList';
import AppFooter from './AppFooter';

class App extends React.Component {
    constructor(props) {
        this.state = {
            data:props.data,
        };
    }
    render() {
        return <div>
            <h1>ToDo List</h1>
            <AppForm />
        </div>
    };
}

export default App;