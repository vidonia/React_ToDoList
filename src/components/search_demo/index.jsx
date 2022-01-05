import React, { Component } from 'react'
import SearchHeader from './Search'
import SearchResultList from './List';
import './index.css'

export default class SearchDemo extends Component {
    searchAction = (input_content) => {
        console.log(input_content);
    };

    itemSelected = (item) => {

    };

    render() {
        return (
            <div>
                <SearchHeader searchAction={this.searchAction}/>
                <SearchResultList 
                results = {[
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'}, 
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'},
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'},
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'},
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'},
                    {icon: "https://yuantu-hz-img.oss-cn-hangzhou.aliyuncs.com/b75d1bc32f67adbbbf8d9e205bbdb60f.png", name: 'test'},
            ]}
                itemSelected={this.itemSelected}
                />
            </div>
        )
    }
}
