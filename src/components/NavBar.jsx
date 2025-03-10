import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      {/* 第一行：左侧“FRAENKEL TIMELINE”标题 + 右侧按钮/搜索 */}
      <div className="top-row">
        <div className="site-logo">
          {/* 前半部分黑色粗体，后半部分灰色细体 */}
          <span className="logo-black">ARCHIVE</span>
          <span className="logo-small"> OF </span>
          <span className="logo-grey"> LIGHT</span>
        </div>

        <div className="navbar-right">
          {/* <a className="btn-black" href="#subscribe">
            SUBSCRIBE
          </a> */}
        </div>
      </div>

      {/* 第一条分割线 */}
      <div className="line-separator"></div>

      {/* 第二行：主菜单 */}
      <div className="bottom-row">
        <nav className="nav-menu">
          <a href="#timeline">TIMELINE</a>
          <a href="#photographers">PHOTOGRAPHERS</a>
          <a href="#genre">GENRE</a>
          <a href="#about">ABOUT</a>
        </nav>
      </div>

      {/* 第二条分割线 */}
      <div className="line-separator"></div>
    </header>
  );
}

export default NavBar;
