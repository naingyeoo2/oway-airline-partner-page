import React, { Component } from "react";
import { MenuOutlined } from "@ant-design/icons";

import logo from "../assets/images/png/owaylogo.png";

import "./header.scss";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="app-container">
            <div className="menu-header">
              <div className="logo">
                <a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer" title="Oway.com.mm">
                  <img src={logo} alt="Logo"></img>
                </a>
                <p>Your Travel Partner in Myanmar</p>
              </div>
              <NavBar />
              <MenuOutlined className="menu-outlined" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
