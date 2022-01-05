import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../../todo_list/Item';

export default class SearchItem extends Component {
    static propTypes = {

    }
    render() {
        const {item} = this.props;
        console.log(item);
        return (
            <div className='search_item_content'>
                <a href="https://www.baidu.com">
                    <img src={item.functionIcon} alt="not found" className='search_item_content_img'/>
                    <p className='search_item_content_title'>{item.functionName}</p>
                </a>
            </div>
        )
    }
}

