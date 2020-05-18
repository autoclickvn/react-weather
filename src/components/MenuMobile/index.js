import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./MenuMobile.css";
import iconFacebook from './icon-facebook.png';
import iconPhone from './icon-phone.png';

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Tỉnh & Thành phố",
    to: "/kinhdo=105.84&vido=21.02",
    exact: false,
  },
  {
    name: "Bản đồ thời tiết",
    to: "/temp-maps",
    exact: false,
  },
  {
    name: "Thế giới",
    to: "/weather-world",
    exact: false,
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className="nav-item">
            <Link to={to} className={`${active} nav-link`} onClick={hideMenuMobile}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const showMenuMobile = () => {
  if (document.getElementById('navbar-toggle').classList.value.indexOf('show-menu-mobile') !== -1) {
    document.getElementById('navbar-toggle').classList.add('hide-menu-mobile');
    document.getElementById('icon-toggle-menu').classList.remove('toggle-icon-menu');
    setTimeout(function(){
      document.getElementById('navbar-toggle').classList.remove('show-menu-mobile');
    }, 500);
  }
  else {
    document.getElementById('navbar-toggle').classList.remove('hide-menu-mobile');
    document.getElementById('icon-toggle-menu').classList.add('toggle-icon-menu');
    document.getElementById('navbar-toggle').classList.add('show-menu-mobile');
  }

}

const hideMenuMobile = () => {
  document.getElementById('navbar-toggle').classList.add('hide-menu-mobile');
  document.getElementById('icon-toggle-menu').classList.toggle('toggle-icon-menu');
  setTimeout(function(){
    document.getElementById('navbar-toggle').classList.remove('show-menu-mobile');
  }, 500);
}

class MenuMobile extends Component {

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="icon-menu" id="icon-toggle-menu" onClick={showMenuMobile}></div>
          <Link to="/" className="navbar-brand">
            ThoiTiet.Online
          </Link>
          <div className="collapse navbar-collapse" id="navbar-toggle">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {this.showMenus(menus)}
            </ul>
            <div className="contact-mobile text-center">
              <div className="one-contact-mobile">
                <img src={iconFacebook} alt="contact" />
                <a href="https://facebook.com/ducnh99">Nguyễn Đức</a>
              </div>
              <div className="one-contact-mobile">
                <img src={iconPhone} alt="contact" />
                <p>0389.755.202</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default MenuMobile;
