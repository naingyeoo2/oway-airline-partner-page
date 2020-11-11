import React, { Component } from "react";
import { Menu } from "antd";

import "./nav-bar.scss";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav" title="Oway.com.mm">
          <Menu mode="horizontal" selectedKeys={['flights']}>
            <Menu.Item key="flights"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Flights</a></Menu.Item>
            <Menu.Item key="hotels"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Hotels</a></Menu.Item>
            <Menu.Item key="bus"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Bus</a></Menu.Item>
            <Menu.Item key="tours"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Tours</a></Menu.Item>
            <Menu.Item key="attractions"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Attractions</a></Menu.Item>
            <Menu.Item key="myanmarVisa"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Myanmar Visa</a></Menu.Item>
            <Menu.Item key="carRental"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Car Rental</a></Menu.Item>
            <Menu.Item key="owayRide"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Oway Ride</a></Menu.Item>
            <Menu.Item key="owayFresh"><a href="https://oway.com.mm" target="_blank" rel="noopener noreferrer">Oway Fresh</a></Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
export default NavBar;
