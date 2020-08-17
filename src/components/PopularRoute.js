import React, { Component } from "react";

import "./popular-route.scss";

import PopularRouteCard from "./PopularRouteCard";

class PopularRoute extends Component {
  render() {
    return (
      <div className="popular-route" id="popular-routes">
        <div className="app-container">
          <center>
            <h2>{this.props.popularRoute && this.props.popularRoute.title}</h2>

            <div className="for-route-card">
              {this.props.popularRoute &&
                this.props.popularRoute.route.map((route, index) => (
                  <PopularRouteCard route={route} key={index} />
                ))}
            </div>
          </center>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default PopularRoute;
