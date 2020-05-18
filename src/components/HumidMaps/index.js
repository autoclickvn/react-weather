import React, { Component } from 'react';
import './CloudMaps.css';
import DropdownMaps from '../DropdownMaps';

class HumidMaps extends Component {
  render() {
    return (
      <div className="satellite">
        <DropdownMaps/>
        <div className="container container-satellite">
        <iframe width="1000" height="750" src="https://embed.windy.com/embed2.html?lat=16.109&lon=106.238&zoom=6&level=surface&overlay=rh&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=17.109&detailLon=106.963&metricWind=default&metricTemp=default&radarRange=-1" frameBorder="0" title="humid"></iframe>
        </div>
      </div>
    );
  }
}

export default HumidMaps;