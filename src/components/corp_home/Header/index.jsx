
import React, { Component } from 'react'
import axios from 'axios';
// import animationData from './src/lottie_corpHome_header.json'

export default class CropHomeHeader extends Component {
    state = {
        height: 147,
        bannerList: [],
    };
    componentDidMount() {
        axios.get('https://aolsee.yuantutech.com/aolsee-web/adApi/open/findAppAd.json?OSType=iOS&adPositionId=81&corpId=261&invokerAppVersion=3.40.4&invokerChannel=App&invokerDeviceId=212BEC30-2259-47BF-AA78-629A28898204&invokerDeviceType=iPhone%20X&invokerDeviceVersion=15.1&unionId=29')
        .then(
            (response)=>{
                if (response.data.data !== null) {
                    const adList = response.data.data.adList;
                    let banners = []
                    adList.forEach(element => {
                        const contentList = element.contentList;
                        if (contentList.length >= 1) {
                            const bannerItem = contentList[0];
                            banners.push(bannerItem);
                        }
                    });
                    this.setState({
                        height: 390,
                        bannerList: banners,
                    });
                }
                console.log(response.data);
            }, 
            (error)=>{

        });
    }
    render() {
        return (
            <div style={{height:this.state.height, backgroundColor: "blue"}}>
                {this.state.bannerList.length > 0?<img src={this.state.bannerList[0].url} alt="" />:null}
            </div>
        )
    }
}
