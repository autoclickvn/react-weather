import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMaps.css';

class DropdownMaps extends Component {
  render() {
    return (
      <div className="dropdown">
        <p className="dropdown-title">bản đồ thời tiết Việt Nam</p>
        <button className="btn btn-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Chọn loại bản đồ <i className="fas fa-sort-down ml-3"></i>
        </button>
        <p className="dropdown-description">Xem bản đồ thời tiết Việt Nam về nhiệt độ, lượng mưa, gió...</p>
        <div className="dropdown-menu dropdown-menu2" aria-labelledby="dropdownMenuButton">
          <Link to="/temp-maps" className="dropdown-item">Nhiệt độ</Link>
          <Link to="/cloud-maps" className="dropdown-item">Mây vệ tinh</Link>
          <Link to="/rain-maps" className="dropdown-item">Lượng mưa</Link>
          <Link to="/wind-maps" className="dropdown-item">Gió</Link>
          <Link to="/humid-maps" className="dropdown-item">Độ ẩm</Link>
          <Link to="/storm-maps" className="dropdown-item">Giông bão</Link>
          <Link to="/wave-maps" className="dropdown-item">Sóng biển</Link>
          <Link to="/pres-maps" className="dropdown-item">Áp suất khí quyển</Link>
        </div>
      </div>
    );
  }
}

export default DropdownMaps;