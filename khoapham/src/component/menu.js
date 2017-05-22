import React,{Component} from 'react';
import Loader from './loader';
class Menu extends Component{
  render(){
    return(
      <div id="menu">
            <div id="logo">
                 <div id="lot">
                 </div>
                 <div id="img_logo">
                      <img src="./img/logo.png" height="75px" />
                 </div>
                 <div id="than">
                        <div id="ex">
                        </div>
                 </div>
            </div>
            <div id="main-menu">
                  <li>Trang chủ</li>
                  <li>Giới Thiệu</li>
                  <li>Lịch Khai Giảng</li>
                  <li>Khóa Học Đang mở</li>
                  <li>Live Code</li>
                  <li>Học Online</li>
                  <li>Liên Hệ</li>
            </div>
            <Loader/>
      </div>
    );
  }
}
export default Menu;
