import React, { Component } from 'react';
import './World.css';

class World extends Component {

  render() {
    let { BK,BRA,TKO,MCV,WST,LD} = this.props;
    
    if (BK !== '' && BRA !== '' && TKO !== '' && MCV !== '' && WST !== '' && LD !== '') {
      let tempCurrentBK = Math.ceil(Number(BK.main.temp) - 273.15);
      let tempCurrentBRA = Math.ceil(Number(BRA.main.temp) - 273.15);
      let tempCurrentTKO = Math.ceil(Number(TKO.main.temp) - 273.15);
      let tempCurrentMCV = Math.ceil(Number(MCV.main.temp) - 273.15);
      let tempCurrentWST = Math.ceil(Number(WST.main.temp) - 273.15);
      let tempCurrentLD = Math.ceil(Number(LD.main.temp) - 273.15);
    return (
      <div className="world">
        <div className="container container-world">
          <div className="all-world">
            <div className="one-world bk">
              <div className="bg-world"></div>
              <p className="world-name">Bắc Kinh</p>
              <p className="world-temp">{tempCurrentBK}°C</p>
              <img src={`./vendor/icon-${BK.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>

            <div className="one-world tko">
              <div className="bg-world"></div>
              <p className="world-name">Tokyo</p>
              <p className="world-temp">{tempCurrentTKO}°C</p>
              <img src={`./vendor/icon-${TKO.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>

            <div className="one-world mcv">
              <div className="bg-world"></div>
              <p className="world-name">Matxcơva</p>
              <p className="world-temp">{tempCurrentMCV}°C</p>
              <img src={`./vendor/icon-${MCV.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>

            <div className="one-world ld">
              <div className="bg-world"></div>
              <p className="world-name">London</p>
              <p className="world-temp">{tempCurrentLD}°C</p>
              <img src={`./vendor/icon-${LD.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>

            <div className="one-world wst">
              <div className="bg-world"></div>
              <p className="world-name">Washington</p>
              <p className="world-temp">{tempCurrentWST}°C</p>
              <img src={`./vendor/icon-${WST.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>

            <div className="one-world bra">
              <div className="bg-world"></div>
              <p className="world-name">Brasilia</p>
              <p className="world-temp">{tempCurrentBRA}°C</p>
              <img src={`./vendor/icon-${BRA.weather[0].icon}.png`} className="world-icon" alt="city" />
            </div>
          </div>
        </div>
      </div>
    );
    }
    else {
      return (<div></div>);
    }
  }
}

export default World;