import React, { Component } from "react";

import "./partner-navbar.scss";

class PartnerNavBar extends Component {
  render() {
    return (
      <div className="reactcomp-anchor-nav">
        <div className="nav-bar-box">
          <nav className="nav-bar-wrapper nav-fixed">
            <ul className="nav-bar-list">
                <li className="nav-bar-li"><a className="nav-bar-href" href="#overview"><div className="nav-bar-gap-wrapper"><span>Overview</span></div></a></li>
                <li className="nav-bar-li"><a className="nav-bar-href" href="#faqs"><div className="nav-bar-gap-wrapper"><span>FAQs</span></div></a></li>
                <li className="nav-bar-li"><a className="nav-bar-href" href="#promotions"><div className="nav-bar-gap-wrapper"><span>Promotions</span></div></a></li>
                <li className="nav-bar-li"><a className="nav-bar-href" href="#popular-cities"><div className="nav-bar-gap-wrapper"><span>Popular Cities</span></div></a></li>
                <li className="nav-bar-li"><a className="nav-bar-href" href="#popular-routes"><div className="nav-bar-gap-wrapper"><span>Popular Route</span></div></a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default PartnerNavBar;
