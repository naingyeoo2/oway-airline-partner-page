import React, { Component } from "react";

import "./promotion.scss";

import PromotionCard from "./PromotionCard";

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOneway: true,
      isRoundTrip: false,
    };
  }
  changeTabOneway = () => this.setState({ isOneway: true, isRoundTrip: false });
  changeTabRoundTrip = () =>
    this.setState({ isOneway: false, isRoundTrip: true });
  render() {
    return (
      <div className="content-padding promotion-wrap" id="promotions">
        <div className="app-container">
          <h2 className="header-title">
            {this.props.promotion && this.props.promotion.title}
            <small>enjoy the great savings with us</small>
          </h2>
          <div className="route-toggle">
            {this.props.promotion && (
              <span
                className={this.state.isOneway ? "active" : "notactive"}
                onClick={() => this.changeTabOneway()}
              >
                {this.props.promotion.one_way.title}
              </span>
            )}

            {this.props.promotion && (
              <span
                className={this.state.isOneway ? "notactive" : "active"}
                onClick={() => this.changeTabRoundTrip()}
              >
                {this.props.promotion.round_trip.title}
              </span>
            )}
          </div>
          {/*........... checking trip toggle oneway or round trip .............*/}
          {this.state.isOneway ? (
            <div className="promotion-card-block">
              {this.props.promotion &&
                this.props.promotion.one_way.route.map((route, index) => (
                  <PromotionCard
                    route={route}
                    key={index}
                    isRound={this.state.isRoundTrip}
                  />
                ))}
            </div>
          ) : (
            <div className="promotion-card-block">
              {this.props.promotion &&
                this.props.promotion.round_trip.route.map((route, index) => (
                  <PromotionCard
                    route={route}
                    key={index}
                    isRound={this.state.isRoundTrip}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Promotion;
