import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CropFunctionImgTag from '../Tag/CropFunctionImgTag'
import './index.css'

export default class CropHomeBottomItem extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    render() {
        const subitems = this.props.items.map((value)=>{
            return <CropHomeBottomItemSubitem key={value.title} item={value}/>
        });
        return (
            <div className='crop_home_bottom_item'>
                <p className='crop_home_item_title'>{this.props.typeName}</p>
                <div className='crop_home_bottom_item_content'>{subitems}</div>
            </div>
        )
    }
}


class CropHomeBottomItemSubitem extends Component {
    render() {
        const {title, icon, subTitle,label} = this.props.item;
        return (
            <div className='crop_home_bottom_item_subitem'>
                <div style={{marginLeft: 10, textOverflow: 'ellipsis'}}>
                <p style={{fontSize: 16, color: '#323438', }}>{title}</p>
                <p style={{fontSize: 12, color: '#A1A7B3', marginTop: 2}}>{subTitle}</p>
                </div>
                <img src={icon} alt="" style={{width:50, height:50, marginRight:9, marginLeft: 'auto'}}/>
                <CropFunctionImgTag label={label}/>
            </div>
        )
    }
}

