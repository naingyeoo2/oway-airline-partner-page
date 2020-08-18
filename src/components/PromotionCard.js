import React, { Component } from "react";

import "./promotion-card.scss";

class PromotionCard extends Component {
  render() {
    return (
      <div className="promotion-card">
        <div className="card-content">
          <div className="card-info">
            <div className="route">
              <span>{this.props.route.from} -&nbsp;</span>
              <span>{this.props.route.to}</span>
              {this.props.isRound ? (
                <span> -&nbsp;{this.props.route.from}</span>
              ) : (
                <span>{""}</span>
              )}
            </div>
            <div className="promo-date">
              <span>
                Date :&nbsp;
                {this.props.route.date_from} -&nbsp;
                {this.props.route.date_to}
              </span>
            </div>
          </div>
          <div className="card-discount">
            Discount :&nbsp;
            <span>{this.props.route && this.props.route.title}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default PromotionCard;
