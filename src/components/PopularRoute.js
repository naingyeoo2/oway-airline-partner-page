import React, { Component } from "react";

import "./popular-route.scss";

import PopularRouteCard from "./PopularRouteCard";

class PopularRoute extends Component {
  render() {
    return (
      <div className="popular-route-wrap content-padding" id="popular-routes">
        <div className="app-container">
          <h2 className="header-title">
            {this.props.popularRoute && this.props.popularRoute.title}
            <small>recommendations from oway travel experts</small>
          </h2>
            {this.props.popularRoute &&
              this.props.popularRoute.route.map((route, index) => (
                <PopularRouteCard route={route} key={index} />
              ))}
        </div>
      </div>
    );
  }
}
export default PopularRoute;
