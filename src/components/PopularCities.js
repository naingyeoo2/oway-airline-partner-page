import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";

import "./popular-cities.scss";
import "react-alice-carousel/lib/alice-carousel.css";
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

  handleOnDragStart = (e) => e.preventDefault();

  render() {
    return (
      <div className="popular-cities-wrap content-padding" id="popular-cities">
        <div className="app-container">
          <h2 className="header-title">
            {this.props.popularCities && this.props.popularCities.title}
            <small>most popular places</small>
          </h2>
          <div className="city-toggle">
            {this.props.popularCities && (
              <span
                className={this.state.isInternational ? "active" : "notactive"}
                onClick={() => this.changeTabInternational()}
              >
                {this.props.popularCities.international.title}
              </span>
            )}

            {this.props.popularCities && (
              <span
                className={this.state.isInternational ? "notactive" : "active"}
                onClick={() => this.changeTabDomestic()}
              >
                {this.props.popularCities.domestic.title}
              </span>
            )}
          </div>
          {this.state.isInternational ? (
            <AliceCarousel
              mouseTrackingEnabled
              buttonsDisabled={false}
              dotsDisabled={true}
              responsive={{
                0: { items: 3 },
                1024: { items: 6 },
              }}
              autoPlay={false}
              autoPlayInterval={3000}
            >
              {this.props.popularCities &&
                this.props.popularCities.international.cities.map(
                  (city, index) => <PopularCitiesCard city={city} key={index} />
                )}
            </AliceCarousel>
          ) : (
            <AliceCarousel
              mouseTrackingEnabled
              buttonsDisabled={false}
              dotsDisabled={true}
              responsive={{
                0: { items: 3 },
                1024: { items: 6 },
              }}
              autoPlay={false}
              autoPlayInterval={3000}
            >
              {this.props.popularCities &&
                this.props.popularCities.domestic.cities.map((city, index) => (
                  <PopularCitiesCard city={city} key={index} />
                ))}
            </AliceCarousel>
          )}
        </div>
      </div>
    );
  }
}
export default PopularCities;
