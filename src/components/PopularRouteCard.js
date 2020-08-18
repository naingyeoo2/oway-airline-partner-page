import React, { Component } from "react";

import "./popular-route-card.scss";

class PopularRouteCard extends Component {
  render() {
    return (
      <div className="popular-route-card">
        {this.props.route.from}
        <div className="route-icon"></div>
        {this.props.route.to}
      </div>
    );
  }
}
export default PopularRouteCard;
