import React, { Component } from "react";

import "./baggage-and-fees.scss";

class BaggageANdFees extends Component {
  render() {
    return (
      <div className="baggage-and-fees">
        <h3 className="tpb-header">{this.props.baggageAndFees && this.props.baggageAndFees.title}</h3>
        <div className="facts-last">
          <ol>
            {this.props.baggageAndFees &&
              this.props.baggageAndFees.description.map(
                (description, index) => (
                  <li key={index}>
                    <span>{description.id}.</span>
                    {description.description}
                  </li>
                )
              )}
          </ol>
        </div>
      </div>
    );
  }
}
export default BaggageANdFees;
