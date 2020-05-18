import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="container container-menu">
          <div className="menu-content">
            <div className="one-menu-content">
              <Link to="/">
                <img src="/image/icon-home.png" alt="menu" title="Trang chủ"/>
              </Link>
            </div>

            <div className="one-menu-content">
              <Link to="/kinhdo=105.84&vido=21.02">
                <img src="/image/icon-64.png" alt="menu" title="Thời tiết tỉnh/thành"/>
              </Link>
            </div>

            <div className="one-menu-content">
              <Link to="/temp-maps">
                <img src="/image/icon-maps.png" alt="menu" title="Bản đồ thời tiết"/>
              </Link>
            </div>

            <div className="one-menu-content">
              <Link to="/weather-world">
                <img src="/image/icon-world.png" title="Thời tiết thế giới" alt="menu"/>
              </Link>
            </div>
            
            <div className="one-menu-content">
              <a href="https://vtv.vn/du-bao-thoi-tiet.htm" target="_blank" rel="noopener noreferrer">
                <img src="/image/icon-vtv.png" alt="menu" title="Dự báo thời tiết VTV"/>
              </a>
            </div>
            

          </div>
        </div>
      </div>
    );
  }
}

export default Menu;