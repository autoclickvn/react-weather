import React, { Component } from 'react';
import './DetailItem7Day.css';

class DetailItem7Day extends Component {
  render() {
    let { daily, date } = this.props;
    let temp7day = Math.ceil(Number(daily.temp.day) - 273.15);
    return (
      <div>
        <div className="one-detail text-center">
          <p className="one-detail-day">{date}</p>
          <img src={`./vendor/icon-${daily.weather[0].icon}.png`} className="current-detail-icon-7day" alt="city" />
          <p className="one-detail-temp">{temp7day}°C</p>
        </div>
      </div>
    );
  }
}

export default DetailItem7Day;