import React, { Component } from "react";
import "./app-container.scss";
import "./popular-airlines.scss";
import { airline } from "../constants/constants";
import Flights from "./Flights";

class PopularAirlines extends Component {
  render() {
    return (
      <div className="popular-airline">
        <div className="app-container">
          <h1 className="title-airline">Popular Airlines</h1>
          <div className="for-airline-card">
            {airline.map((item) => (
              <Flights item={item} key={item.id} path={this.props.path} />
            ))}
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default PopularAirlines;
