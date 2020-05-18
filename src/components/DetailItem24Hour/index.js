import React, { Component } from 'react';
import './DetailItem24Hour.css';

class DetailItem24Hour extends Component {
  render() {
    let { hourly, hour } = this.props;
    let temp24h = Math.ceil(Number(hourly.temp) - 273.15);
    return (
      <div>
        <div className="one-detail text-center">
          <p className="one-detail-day">{hour} giờ</p>
          <img src={`./vendor/icon-${hourly.weather[0].icon}.png`} className="current-detail-icon-7day" alt="city" />
          <p className="one-detail-temp">{temp24h}°C</p>
        </div>
      </div>
    );
  }
}

export default DetailItem24Hour;