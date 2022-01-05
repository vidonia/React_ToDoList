import React, { Component } from 'react'
import SearchHeader from './Search'
import SearchResultList from './List';
import './index.css'
import axios from 'axios';

export default class SearchDemo extends Component {
    state = {children: []};
    componentDidMount() {
        axios.get('https://api.yuantutech.com/user-web/restapi/common/personalCenter/all?unionId=29&indexChannel=1&main=true').then(
            (response) => {
                const result = response.data;
                const data = result.data;
                const hhh = data[1];
                const children = hhh.children;
                console.log(children);
                this.setState({
                    children: children
                });
            },
        );
    }
    searchAction = (input_content) => {
        
    };

    itemSelected = (item) => {

    };

    render() {
        return (
            <div>
                <SearchHeader searchAction={this.searchAction}/>
                <SearchResultList 
                results = {this.state.children}
                itemSelected={this.itemSelected}
                />
            </div>
        )
    }
}
