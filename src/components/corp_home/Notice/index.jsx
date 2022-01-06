import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

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
                <span className='crop_home_notice_logo'></span>
                <span className='crop_home_notice_line'></span>
            </div>
        )
    }
}
