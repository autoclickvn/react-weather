import React, { Component } from 'react';
import NavbarItem from '../NavbarItem';
import './Navbar.css';
import iconCreate from './iconCreate.png';
import iconTet from './iconTet.png';
import iconNhduc from './iconNhduc.png';
import iconMod from './iconMod.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbars: [
        {
          href: 'http://nhduc.site',
          src: iconNhduc,
          title: 'Profile'
        },
        {
          href: 'http://modulotool.online',
          src: iconMod,
          title: 'Modulo Tool'
        },
        {
          href: 'https://autoclickvn.github.io/count-down-tet-holiday/',
          src: iconTet,
          title: 'Countdown Tet'
        }
      ]
    };
  }

  showCreateBar = () => {
    document.getElementById("navbar-content2").classList.toggle("show-navbar");
    document.getElementById("navbar-logo2").classList.toggle("rotate-navbar");
  }

  render() {
    const { navbars } = this.state;
    return (
      <div className="navbar navbar2">
        <img src={iconCreate} alt="website" className="navbar-logo2" id="navbar-logo2" title="Liên kết website" onClick={this.showCreateBar} />
        <div className="navbar-content2" id="navbar-content2">
          {navbars.map((navbar, index) => {
            return <NavbarItem key={index} navbar={navbar} />
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;