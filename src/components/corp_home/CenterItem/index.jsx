
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CropFunctionTag from '../Tag'
import './index.css'

export default class CropHomeCenterItem extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
    }

    render() {
        const subitems = this.props.items.map((item)=>{
            return <CropHomeCenterItemSubItem key={item.title} item={item}/>
        });
        return (
            <div className='crop_home_center_item'>
                {subitems}
            </div>
        )
    }
}


class CropHomeCenterItemSubItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }
    render() {
        const {title, subTitle, icon, label} = this.props.item;
        return (
            <div className='crop_home_center_item_subitem'>
                <img src={icon} alt="hhhhh" style={{width:64, height:64}}/>
                <p className='crop_home_center_item_subitem_title'>{title}</p>
                <p className='crop_home_center_item_subitem_subtitle'>{subTitle}</p>
                <CropFunctionTag label={label} top={-4}/>    
            </div>
        );
    }
}
