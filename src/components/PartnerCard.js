import React, { Component } from "react";
import "./partner-card.scss";

class PartnerCard extends Component {
  render() {
    return (
      <div className="partner-card">
        <div className="app-container">
          {/* <div className="logo">
            {this.props.image && (
              <img
                src={require(`../assets/images/svg/${this.props.image}`)}
                width="100px"
                height="100px"
              />
            )}
          </div> */}
          <div className="airline-name">
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default PartnerCard;
