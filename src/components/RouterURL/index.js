import React from 'react';
import NotFound404 from '../NotFound404';
import DetailContainer from '../../container/DetailContainer';
import Home from '../Home';
import TempMaps from '../TempMaps';
import CloudMaps from '../CloudMaps';
import RainMaps from '../RainMaps';
import PresMaps from '../PresMaps';
import WindMaps from '../WindMaps';
import StormMaps from '../StormMaps';
import HumidMaps from '../HumidMaps';
import WaveMaps from '../WaveMaps';
import WorldContainer from '../../container/WorldContainer';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home/>
  },
  {
    path: `/kinhdo=:lon&vido=:lat`,
    exact: true,
    main: ({ match }) => <DetailContainer match={match}/>
  },
  {
    path: '/temp-maps',
    exact: true,
    main: () => <TempMaps/>
  },
  {
    path: '/cloud-maps',
    exact: true,
    main: () => <CloudMaps/>
  },
  {
    path: '/rain-maps',
    exact: true,
    main: () => <RainMaps/>
  },
  {
    path: '/pres-maps',
    exact: true,
    main: () => <PresMaps/>
  },
  {
    path: '/wind-maps',
    exact: true,
    main: () => <WindMaps/>
  },
  {
    path: '/storm-maps',
    exact: true,
    main: () => <StormMaps/>
  },
  {
    path: '/humid-maps',
    exact: true,
    main: () => <HumidMaps/>
  },
  {
    path: '/wave-maps',
    exact: true,
    main: () => <WaveMaps/>
  },
  {
    path: '/weather-world',
    exact: true,
    main: () => <WorldContainer/>
  },
  {
    path: '/',
    exact: false,
    main: () => <NotFound404/>
  }
];

export default routes;