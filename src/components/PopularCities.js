import React, { Component } from "react";
import "./app-container.scss";
import "./popular-cities.scss";
import PopularCitiesCard from "./PopularCitiesCard";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./popular-cities.scss";

class PopularCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternational: true,
      isDomestic: false,
    };
  }
  // state = {
  //   currentIndex: 0,
  //   // galleryItems: [1, 2, 3].map((i) => <h2 key={i}>{i}</h2>),
  // };

  changeTabInternational = () =>
    this.setState({ isInternational: true, isDomestic: false });
  changeTabDomestic = () =>
    this.setState({ isInternational: false, isDomestic: true });

  handleOnDragStart = (e) => e.preventDefault();

  render() {
    return (
      <div className="popular-cities">
        <div className="app-container">
          <center>
            <h2>
              {this.props.popularCities && this.props.popularCities.title}
            </h2>
            <div className="header-title">
              <small>
                <span className="faq-quote">most popular places</span>
              </small>
            </div>
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
          </center>
          {this.state.isInternational ? (
            <AliceCarousel
              mouseTrackingEnabled
              // items={this.state.galleryItems}
              responsive={this.responsive}
              buttonsDisabled={false}
              dotsDisabled={true}
              responsive={{
                0: { items: 3 },
                1024: { items: 6 },
              }}
              autoPlay={true}
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
              // items={this.state.galleryItems}
              responsive={this.responsive}
              buttonsDisabled={false}
              dotsDisabled={true}
              responsive={{
                0: { items: 3 },
                1024: { items: 6 },
              }}
              autoPlay={true}
              autoPlayInterval={3000}
            >
              {this.props.popularCities &&
                this.props.popularCities.domestic.cities.map((city, index) => (
                  <PopularCitiesCard city={city} key={index} />
                ))}
            </AliceCarousel>
          )}
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default PopularCities;
