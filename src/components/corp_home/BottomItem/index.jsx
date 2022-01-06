import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
            <div>
                <p className='crop_home_item_title'>{this.props.typeName}</p>
                {subitems}
            </div>
        )
    }
}


class CropHomeBottomItemSubitem extends Component {
    render() {
        const {title, icon} = this.props.item;
        return (
            <div>
                <img src={icon} alt="" style={{width:50, height:50}}/>
                <p>{title}</p>
            </div>
        )
    }
}

