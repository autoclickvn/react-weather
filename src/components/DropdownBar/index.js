import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DropdownBar.css';

class DropdownBar extends Component {
  
  render() {
    return (
      <div className="dropdown">
        <p className="dropdown-title">Thời tiết Việt Nam</p>
        <button className="btn btn-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Chọn tỉnh, thành phố <i className="fas fa-sort-down ml-3"></i>
        </button>
        <p className="dropdown-description">Cập nhật nhanh và chính xác thời tiết hiện tại, dự báo thời tiết hôm nay, dự báo thời tiết 7 ngày tới của 63 tỉnh và thành phố trên cả nước</p>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/kinhdo=105.84&vido=21.02" className="dropdown-item">Hà Nội</Link>
          <Link to="/kinhdo=106.66&vido=10.75" className="dropdown-item">Hồ Chí Minh</Link>
          <Link to="/kinhdo=105.16&vido=10.5" className="dropdown-item">An Giang</Link>
          <Link to="/kinhdo=107.08&vido=10.35" className="dropdown-item">Bà Rịa - Vũng Tàu</Link>
          <Link to="/kinhdo=106.19&vido=21.27" className="dropdown-item">Bắc Giang</Link>
          <Link to="/kinhdo=105.83&vido=22.13" className="dropdown-item">Bắc Kạn</Link>
          <Link to="/kinhdo=105.72&vido=9.29" className="dropdown-item">Bạc Liêu</Link>
          <Link to="/kinhdo=106.05&vido=21.18" className="dropdown-item">Bắc Ninh</Link>
          <Link to="/kinhdo=106.38&vido=10.23" className="dropdown-item">Bến Tre</Link>
          <Link to="/kinhdo=106.66&vido=11.16" className="dropdown-item">Bình Dương</Link>
          <Link to="/kinhdo=109&vido=14.16" className="dropdown-item">Bình Định</Link>
          <Link to="/kinhdo=106.91&vido=11.75" className="dropdown-item">Bình Phước</Link>
          <Link to="/kinhdo=108&vido=11" className="dropdown-item">Bình Thuận</Link>
          <Link to="/kinhdo=105.15&vido=9.17" className="dropdown-item">Cà Mau</Link>
          <Link to="/kinhdo=105.78&vido=10.03" className="dropdown-item">Cần Thơ</Link>
          <Link to="/kinhdo=106&vido=22.67" className="dropdown-item">Cao Bằng</Link>
          <Link to="/kinhdo=108&vido=16" className="dropdown-item">Đà Nẵng</Link>
          <Link to="/kinhdo=108&vido=13" className="dropdown-item">Đắk Lắk</Link>
          <Link to="/kinhdo=107.76&vido=12.65" className="dropdown-item">Đắk Nông</Link>
          <Link to="/kinhdo=103.01&vido=21.38" className="dropdown-item">Điện Biên</Link>
          <Link to="/kinhdo=107&vido=11" className="dropdown-item">Đồng Nai</Link>
          <Link to="/kinhdo=105.66&vido=10.66" className="dropdown-item">Đồng Tháp</Link>
          <Link to="/kinhdo=108.25&vido=13.75" className="dropdown-item">Gia Lai</Link>
          <Link to="/kinhdo=104.98&vido=22.83" className="dropdown-item">Hà Giang</Link>
          <Link to="/kinhdo=106&vido=20.58" className="dropdown-item">Hà Nam</Link>
          <Link to="/kinhdo=105.9&vido=18.33" className="dropdown-item">Hà Tĩnh</Link>
          <Link to="/kinhdo=106.31&vido=20.93" className="dropdown-item">Hải Dương</Link>
          <Link to="/kinhdo=106.69&vido=20.85" className="dropdown-item">Hải Phòng</Link>
          <Link to="/kinhdo=105.33&vido=20.81" className="dropdown-item">Hòa Bình</Link>
          <Link to="/kinhdo=105.728&vido=9.797" className="dropdown-item">Hậu Giang</Link>
          <Link to="/kinhdo=106.06&vido=20.65" className="dropdown-item">Hưng Yên</Link>
          <Link to="/kinhdo=109&vido=12.35" className="dropdown-item">Khánh Hòa</Link>
          <Link to="/kinhdo=105.16&vido=10" className="dropdown-item">Kiên Giang</Link>
          <Link to="/kinhdo=107.91&vido=14.75" className="dropdown-item">Kon Tum</Link>
          <Link to="/kinhdo=103.47&vido=22.388" className="dropdown-item">Lai Châu</Link>
          <Link to="/kinhdo=103.94&vido=22.48" className="dropdown-item">Lào Cai</Link>
          <Link to="/kinhdo=106.73&vido=21.83" className="dropdown-item">Lạng Sơn</Link>
          <Link to="/kinhdo=108.33&vido=11.5" className="dropdown-item">Lâm Đồng</Link>
          <Link to="/kinhdo=106.16&vido=10.66" className="dropdown-item">Long An</Link>
          <Link to="/kinhdo=106.16&vido=20.42" className="dropdown-item">Nam Định</Link>
          <Link to="/kinhdo=105.06&vido=19.23" className="dropdown-item">Nghệ An</Link>
          <Link to="/kinhdo=105.83&vido=20.25" className="dropdown-item">Ninh Bình</Link>
          <Link to="/kinhdo=108.83&vido=11.75" className="dropdown-item">Ninh Thuận</Link>
          <Link to="/kinhdo=105.22&vido=21.398" className="dropdown-item">Phú Thọ</Link>
          <Link to="/kinhdo=109.11&vido=13.17" className="dropdown-item">Phú Yên</Link>
          <Link to="/kinhdo=106.33&vido=17.5" className="dropdown-item">Quảng Bình</Link>
          <Link to="/kinhdo=107.96&vido=15.66" className="dropdown-item">Quảng Nam</Link>
          <Link to="/kinhdo=108.66&vido=15" className="dropdown-item">Quảng Ngãi</Link>
          <Link to="/kinhdo=107.33&vido=21.25" className="dropdown-item">Quảng Ninh</Link>
          <Link to="/kinhdo=107.19&vido=16.75" className="dropdown-item">Quảng Trị</Link>
          <Link to="/kinhdo=105.98&vido=9.6" className="dropdown-item">Sóc Trăng</Link>
          <Link to="/kinhdo=103.9&vido=21.32" className="dropdown-item">Sơn La</Link>
          <Link to="/kinhdo=106.09&vido=11.3" className="dropdown-item">Tây Ninh</Link>
          <Link to="/kinhdo=106.33&vido=20.5" className="dropdown-item">Thái Bình</Link>
          <Link to="/kinhdo=105.84&vido=21.59" className="dropdown-item">Thái Nguyên</Link>
          <Link to="/kinhdo=105.5&vido=20" className="dropdown-item">Thanh Hóa</Link>
          <Link to="/kinhdo=107.58&vido=16.33" className="dropdown-item">Thừa Thiên - Huế</Link>
          <Link to="/kinhdo=106.16&vido=10.41" className="dropdown-item">Tiền Giang</Link>
          <Link to="/kinhdo=106.25&vido=9.83" className="dropdown-item">Trà Vinh</Link>
          <Link to="/kinhdo=105.25&vido=22.11" className="dropdown-item">Tuyên Quang</Link>
          <Link to="/kinhdo=106&vido=10.16" className="dropdown-item">Vĩnh Long</Link>
          <Link to="/kinhdo=105.599998&vido=21.299999" className="dropdown-item">Vĩnh Phúc</Link>
          <Link to="/kinhdo=104.66&vido=21.5" className="dropdown-item">Yên Bái</Link>

        </div>
      </div>
    );
  }
}

export default DropdownBar;