import React, { Component } from "react";
import "./app-container.scss";
import "./baggage-and-fees.scss";

class BaggageANdFees extends Component {
  render() {
    return (
      <div className="baggage-and-fees">
        <h3>{this.props.baggageAndFees && this.props.baggageAndFees.title}</h3>
        <hr></hr>
        <div className="facts-last">
          <ol>
            {this.props.baggageAndFees &&
              this.props.baggageAndFees.description.map((description) => (
                <li><span>{description.id}.</span>{description.description}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BaggageANdFees;
