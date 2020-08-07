import React, { Component } from "react";
import "./partner-card.scss";

class PartnerCard extends Component {
  render() {
    return (
      <div className="partner">
      <div className="pcard">
        <div className="logo">
          {this.props.image && (
            <img
              src={require(`../assets/images/svg/${this.props.image}`)}
              width="90%"
              height="90%"
            />
          )}
        </div>
        <div className="title">
          <h1>{this.props.name}</h1>
        </div>
      </div>
      </div>
    );
  }
}
export default PartnerCard;
