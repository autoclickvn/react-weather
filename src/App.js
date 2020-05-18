import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./components/RouterURL";
import Menu from './components/Menu'
import './App.css';
import Navbar from './components/Navbar';
import MenuMobile from './components/MenuMobile';
import BannerContainer from './container/BannerContainer';

class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <div className="all">
          <div className="bg-all" id="bg-all">
            <Menu />
            <MenuMobile/>
            <div className="main">{this.showContentMenus(routes)}</div>
            <Navbar />
            <BannerContainer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;