import React, { Component } from "react";

import "./promotion-card.scss";

class PromotionCard extends Component {
  render() {
    return (
      <div className="promotion-card">
        <div className="card-content">
          <div className="route">
            <span>{this.props.route.from}</span> -&nbsp;
            <span>{this.props.route.to}</span>
            {this.props.isRound ? (
              <span>-&nbsp;{this.props.route.from}</span>
            ) : (
              <span>{""}</span>
            )}
          </div>
          Date:&nbsp;
          {this.props.route.date_from} -&nbsp;
          {this.props.route.date_to}
        </div>
        <hr></hr>
        <div className="card-title">
          <h4>{this.props.route && this.props.route.title}</h4>
        </div>
      </div>
    );
  }
}
export default PromotionCard;
