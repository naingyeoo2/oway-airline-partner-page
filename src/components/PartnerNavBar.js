import React, { Component } from "react";

import "./partner-navbar.scss";

class PartnerNavBar extends Component {
  render() {
    return (
      <div className="reactcomp-anchor-nav">
        <div class="nav-bar-box">
          <nav class="nav-bar-wrapper">
            <ul class="nav-bar-list">
                <li class="nav-bar-li"><a className="nav-bar-href"><div className="nav-bar-gap-wrapper"><span>Overview</span></div></a></li>
                <li class="nav-bar-li"><a className="nav-bar-href"><div className="nav-bar-gap-wrapper"><span>FAQs</span></div></a></li>
                <li class="nav-bar-li"><a className="nav-bar-href"><div className="nav-bar-gap-wrapper"><span>Promotions</span></div></a></li>
                <li class="nav-bar-li"><a className="nav-bar-href"><div className="nav-bar-gap-wrapper"><span>Popular Cities</span></div></a></li>
                <li class="nav-bar-li"><a className="nav-bar-href"><div className="nav-bar-gap-wrapper"><span>Popular Route</span></div></a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default PartnerNavBar;
