
import React, { Component } from 'react'
import './index.css'

export default class CropHomeCenterItem extends Component {
    render() {
        const subitems = this.props.items.map((item)=>{
            return <CropHomeCenterItemSubItem key={item}/>
        });
        return (
            
            <div className='crop_home_center_item'>
                {subitems}
            </div>
        )
    }
}


class CropHomeCenterItemSubItem extends Component {
    render() {
        return (
            <div className='crop_home_center_item_subitem'>
                <img src="https://front-images.oss-cn-hangzhou.aliyuncs.com/i4/fe48cb427d084f20ec78f1c95cbdfed4-180-180.png" alt="hhhhh" style={{width:64, height:64}}/>
                <p className='crop_home_center_item_subitem_title'>预约挂号</p>
                <p className='crop_home_center_item_subitem_subtitle'>线上快捷预约</p>
            </div>
        );
    }
}
