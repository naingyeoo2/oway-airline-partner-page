import React, { Component } from "react";
import "./promotion-card.scss";

class PromotionCard extends Component {
  render() {
    return (
      <div className="promotion-card">
        <div className="card-title">
          <h4>{this.props.route && this.props.route.title}</h4>
        </div>
        <hr></hr>
        <div className="card-content">
          {this.props.route.from} -&nbsp;
          {this.props.route.to}
          <br></br>
          {this.props.route.date_from} to&nbsp;
          {this.props.route.date_to}
        </div>
      </div>
    );
  }
}
export default PromotionCard;
