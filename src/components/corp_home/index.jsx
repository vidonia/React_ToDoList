import React, { Component } from 'react'
import CropHomeHeader from './Header'
import CropHomeNotice from './Notice'
import CropHomeCenterItem from './CenterItem'
import './index.css'

export default class CropHome extends Component {
    render() {
        return (
            <div>
                <CropHomeHeader />
                <div className='crop_home_body'>
                    <CropHomeNotice />
                    <CropHomeCenterItem items={['1', '2', '3']}/>
                </div>
            </div>
        )
    }
}
