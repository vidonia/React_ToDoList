import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import ic_corpHome_notice from '../img/ic_corpHome_notice.png'

export default class CropHomeNotice extends Component {
    state = {
        noticeList: ["hhh"]
    }
    // componentDidMount() {
    //     axios.get('').then((response)=>{

    //     });
    // }
    render() {
        
        if (this.state.noticeList.length <= 0) {
            return null
        }

        return (
            <div className='crop_home_notice'>
                <img className='crop_home_notice_logo' src={ic_corpHome_notice} alt="" />
                <span className='crop_home_notice_line'></span>
            </div>
        )
    }
}
