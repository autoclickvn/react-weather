import React, { Component } from 'react';
import './NavbarItem.css';

class NavbarItem extends Component {
  render() {
    const { navbar } = this.props;
    return (
      <div className="one-navbar-item">
        <a href={navbar.href} rel="noopener noreferrer" target="_blank">
          <img src={navbar.src} title={navbar.title} alt="link" />
        </a>
      </div>
    );
  }
}

export default NavbarItem;