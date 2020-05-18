import React, { Component } from 'react';
import './Detail.css';
import DetailItem7Day from '../DetailItem7Day';
import moment from 'moment';
import DetailItem24Hour from '../DetailItem24Hour';
import DropdownBar from '../DropdownBar';

class Detail extends Component {
  render() {
    let { weathers, weathers7day } = this.props;
    if (weathers && weathers7day) {
      let tempCurrent = Math.ceil(Number(weathers.main.temp) - 273.15);
      let hourlys = weathers7day.hourly;
      let dailys = weathers7day.daily;
      const now = moment();
      const now2 = moment();
      
      return (
        <div className="detail">
          <DropdownBar/>
          <div className="container container-detail">
            <div className="city-detail">
              <p className="detail-week-title">Tỉnh/Thành phố: <span className="detail-names"> {weathers.name}</span> </p>
              <div className="current-detail row col-sm-9">
                <div className="current-detail-left col-sm-4">
                  <p className="current-detail-lat">Kinh độ: {weathers.coord.lon}</p>
                  <p className="current-detail-lon">Vĩ độ: {weathers.coord.lat}</p>
                  <p className="current-detail-humid">Độ ẩm: {weathers.main.humidity}%</p>
                </div>
                <div className="current-detail-center col-sm-4 text-center">
                  <p className="current-detail-wind-speed">Tốc độ gió: {weathers.wind.speed} (m/s)</p>
                  <p className="current-detail-wind-deg">Hướng gió: {weathers.wind.deg}°</p>
                  <p className="current-detail-pres">Áp suất khí quyển: {weathers.main.pressure} (hPa)</p>
                </div>
                <div className="current-detail-right col-sm-4 text-right">
                  <img src={`./vendor/icon-${weathers.weather[0].icon}.png`} className="current-detail-icon" alt="city" />
                  <p className="current-detail-temp">{tempCurrent}°C</p>
                </div>
              </div>

              <p className="detail-week-title">Dự báo thời tiết hôm nay <span className="detail-names">{now.format("DD/MM/YYYY")}</span></p>
              <div className="week-detail">
                {hourlys.map((hourly, index) => {
                  if(index <8 && index !== 0)
                    return <DetailItem24Hour key={index} hourly={hourly} hour={now.add('1', 'hours').format("HH")} />
                })}
              </div>


              <p className="detail-week-title">Dự báo thời tiết <span className="detail-names">7 ngày tới</span></p>
              <div className="week-detail">
                {dailys.map((daily, index) => {
                  if(index !== 7)
                    return <DetailItem7Day key={index} daily={daily} date={now2.add('1', 'days').format("DD/MM")} />
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>)
    }
  }
}

export default Detail;