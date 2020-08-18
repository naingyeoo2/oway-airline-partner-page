import React, { Component } from "react";

import "./popular-airlines.scss";

import { airlines } from "../constants/constants";

import PopularAirlineCard from "./PopularAirlineCard";

class PopularAirlines extends Component {
  render() {
    return (
      <div className="popular-airline">
        <div className="app-container">
          <div className="airline-block">
            <div className="col-title">
              <h2 className="header-title">
                <span>Popular Airlines</span>
                <small>for your best travel experience</small>
              </h2>
            </div>
            <div className="col-image">
              <h3>
                <span>{airlines[0].international.title}</span>
              </h3>
              <div>
                {airlines[0].international.airline_partner.map((airline) => (
                  <PopularAirlineCard airline={airline} key={airline.id} />
                ))}
              </div>
            </div>
            <div className="col-image">
              <h3>
                <span>{airlines[0].domestic.title}</span>
              </h3>
              <div>
                {airlines[0].domestic.airline_partner.map((airline) => (
                  <PopularAirlineCard airline={airline} key={airline.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PopularAirlines;
