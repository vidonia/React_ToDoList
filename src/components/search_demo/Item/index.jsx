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
                <img src={item.icon} alt="" className='search_item_content_img'/>
                <p className='search_item_content_title'>{item.name}</p>
            </div>
        )
    }
}

