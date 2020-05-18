import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container container-home">
          <div className="home-content">
            <div className="one-home-content">
              <Link to="/temp-maps"><img src="/image/icon-maps.png" alt="home-content" className="img-home-content" /></Link>
              <p>Bản đồ thời tiết Việt Nam: nhiệt độ, lượng mưa...</p>
            </div>
            <div className="one-home-content">
              <Link to="/kinhdo=105.84&vido=21.02"><img src="/image/icon-64.png" alt="home-content" className="img-home-content" /></Link>
              <p>Dự báo thời tiết 63 tỉnh, thành phố trên cả nước</p>
            </div>
            <div className="one-home-content">
              <Link to="/weather-world"><img src="/image/icon-world.png" alt="home-content" className="img-home-content" /></Link>
              <p>Xem thời tiết một số thành phố lớn trên thế giới</p>
            </div>
            <div className="one-home-content">
              <a href="https://vtv.vn/du-bao-thoi-tiet.htm" target="_blank" rel="noopener noreferrer"><img src="/image/icon-vtv.png" alt="home-content" className="img-home-content" /></a>
              <p>Dự báo thời tiết nhanh và chính xác nhất từ VTV</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;