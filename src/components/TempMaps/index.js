import React, { Component } from 'react';
import './TempMaps.css';
import DropdownMaps from '../DropdownMaps';

class TempMaps extends Component {
  render() {
    return (
      <div className="maps">
        <DropdownMaps/>
        <div className="container container-maps">
        <iframe width="1000" height="750" src="https://embed.windy.com/embed2.html?lat=16.004&lon=105.183&zoom=6&level=surface&overlay=temp&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=17.109&detailLon=106.963&metricWind=default&metricTemp=default&radarRange=-1" frameBorder="0" title="temp"></iframe>
        </div>
      </div>
    );
  }
}

export default TempMaps;