import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CropFunctionTag from '../Tag'
import './index.css'

export default class CropHomeMoreItem extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    render() {
        const subitems = this.props.items.map((value)=>{
            return <CropHomeMoreItemSubitem key={value.title} item={value}/>
        });
        return (
            <div className='crop_home_more_item'>
                <p className='crop_home_item_title'>{this.props.typeName}</p>
                <div className='crop_home_item_body'>{subitems}</div>
            </div>
        )
    }
}

class CropHomeMoreItemSubitem extends Component {
    render() {
        let {title, icon, label} = this.props.item;
        const length = title.length;
        // if (length > 4) {
        //     const aa= 'fsdfsd';
        //     aa.slice()
        //     title = title.slice(4, title.length-4,'/\n');
        // }
        return (
            <div className='crop_home_more_item_subitem' style={{marginBottom:length<=4?20:15}}>
                <img src={icon} alt="" style={{width:28, height:28}}/>
                <p className='crop_home_more_item_subitem_title'>{title}</p>
                <CropFunctionTag label={label}/>
            </div>
        )
    }
}
