
import React from 'react'
import './index.css'

export default function CropFunctionTag(props) {
    const {label, top} = props;
    if (label == 0) {
        return null
    }

    let content = ''
    let color = '#FF4D4F'
    if (label == 1) {
        content = '新上线';
    } else if (label == 2) {
        content = '即将上线';
        color = '#A1A7B3'
    } else if (label == 3) {
        content = '热门';
    } else if (label == 4) {
        content = '推荐使用';
        color = '#FF7518'
    }
    const width = content.length * 20;
    return (
        <span className='crop_item_tag' style={{background: color, top: top*2, left: '25%', width: width}}>
            {content}
        </span>
    )
}

