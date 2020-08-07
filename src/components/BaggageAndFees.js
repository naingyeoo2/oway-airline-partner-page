import React, { Component } from "react";
import "./app-container.scss";
import './baggage-and-fees.scss'

class BaggageANdFees extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="baggage">
          <h2>
            {this.props.baggageAndFees && this.props.baggageAndFees.title}
          </h2>
          <p>
            {this.props.baggageAndFees && this.props.baggageAndFees.description}
          </p>
        </div>
      </div>
    );
  }
}
export default BaggageANdFees;
