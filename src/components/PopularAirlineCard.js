import React, { Component } from "react";
import "./popular-airline-card.scss";
import { Link, Router } from "react-router-dom";

class PopularAirlineCard extends Component {
  render() {
    return (
      <Link
        to={`partner/${this.props.airline.link}`}
        style={
          this.props.path == this.props.airline.link ? { display: "none" } : {}
        }
      >
        <span className="popular-airline-card">
          <img
            src={require(`../assets/images/jpeg/${this.props.airline.image_url}`)}
            width="40px"
            height="auto"
          />
        </span>
      </Link>
    );
  }
}
export default PopularAirlineCard;
