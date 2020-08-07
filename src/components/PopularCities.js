import React, { Component } from "react";
import "./app-container.scss";
import "./popular-cities.scss";
import PopularCitiesCard from "./PopularCitiesCard";

class PopularCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternational: true,
      isDomestic: false,
    };
  }
  changeTabInternational = () =>
    this.setState({ isInternational: true, isDomestic: false });
  changeTabDomestic = () =>
    this.setState({ isInternational: false, isDomestic: true });
  render() {
    return (
      <div className="popular-cities">
        <div className="app-container">
          <center>
            <h2>
              {this.props.popularCities && this.props.popularCities.title}
            </h2>
            <div className="city-toggle">
              {this.props.popularCities && (
                <span
                  className={
                    this.state.isInternational ? "active" : "notactive"
                  }
                  onClick={() => this.changeTabInternational()}
                >
                  {this.props.popularCities.international.title}
                </span>
              )}

              {this.props.popularCities && (
                <span
                  className={
                    this.state.isInternational ? "notactive" : "active"
                  }
                  onClick={() => this.changeTabDomestic()}
                >
                  {this.props.popularCities.domestic.title}
                </span>
              )}
            </div>
            {this.state.isInternational ? (
              <div className="for-city-card">
                {this.props.popularCities &&
                  this.props.popularCities.international.cities.map(
                    (city, index) => (
                      <PopularCitiesCard city={city} key={index} />
                    )
                  )}
              </div>
            ) : (
              <div className="for-city-card">
                {this.props.popularCities &&
                  this.props.popularCities.domestic.cities.map(
                    (city, index) => (
                      <PopularCitiesCard city={city} key={index} />
                    )
                  )}
              </div>
            )}
          </center>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default PopularCities;
