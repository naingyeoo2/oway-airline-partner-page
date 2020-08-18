import React, { Component } from "react";

import "./partner-card.scss";

class PartnerCard extends Component {
  render() {
    return (
      <div className="partner-card">
        <div className="app-container">
          <div className="airline-name">
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default PartnerCard;
