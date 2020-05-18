import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
    let { HN, HP, DN, HCM, CT } = this.props;
    if (HN !== '' && HP !== '' && DN !== '' && HCM !== '' && CT !== '') {
      let tempCurrentHN = Math.ceil(Number(HN.main.temp) - 273.15);
      let tempCurrentHP = Math.ceil(Number(HP.main.temp) - 273.15);
      let tempCurrentDN = Math.ceil(Number(DN.main.temp) - 273.15);
      let tempCurrentHCM = Math.ceil(Number(HCM.main.temp) - 273.15);
      let tempCurrentCT = Math.ceil(Number(CT.main.temp) - 273.15);
      return (
        <div className="banner">
          <div className="banner-content">
            <p>Thời tiết hiện tại:</p>
            <marquee>
              <span className="banner-current-city">Hà Nội:  {tempCurrentHN}°C</span>
              <span className="banner-current-city">Hải Phòng:  {tempCurrentHP}°C</span>
              <span className="banner-current-city">Đà Nẵng:  {tempCurrentDN}°C</span>
              <span className="banner-current-city">TP.HCM:  {tempCurrentHCM}°C</span>
              <span className="banner-current-city">Cần Thơ:  {tempCurrentCT}°C</span>
            </marquee>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
}

export default Banner;