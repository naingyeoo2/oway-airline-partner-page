import React, { Component } from "react";
import "./promotion.scss";
import "./app-container.scss";
import PromotionCard from "./PromotionCard";

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   routeToggle: 'oneway',
      isOneway: true,
      isRoundTrip: false,
    };
  }
  changeTabOneway = () => this.setState({ isOneway: true, isRoundTrip: false });
  changeTabRoundTrip = () =>
    this.setState({ isOneway: false, isRoundTrip: true });
  //   routeToggleOneway() {
  //     this.setState({routeToggle: 'oneway'});
  //   }
  //   routeToggleRoundTrip() {
  //     this.setState({routeToggle: 'rountTrip'});
  //   }
  render() {
    return (
      <div className="promotion">
        <div className="app-container">
          <center>
            <h2>{this.props.promotion && this.props.promotion.title}</h2>
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
              <div className="for-promotion-card">
                {this.props.promotion &&
                  this.props.promotion.one_way.route.map((route, index) => (
                    <PromotionCard route={route} key={index} />
                  ))}
              </div>
            ) : (
              <div className="for-promotion-card">
                {this.props.promotion &&
                  this.props.promotion.round_trip.route.map((route, index) => (
                    <PromotionCard route={route} key={index} />
                  ))}
              </div>
            )}
          </center>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default Promotion;
