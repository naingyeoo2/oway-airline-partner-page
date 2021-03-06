import React, { Component } from "react";

import "./popular-cities-card.scss";

class PopularCitiesCard extends Component {
  render() {
    const style = {
      image: {
        backgroundImage:
          "url(" +
          require(`../assets/images/jpg/${this.props.city.img_url}`) +
          ")",
      },
    };
    return (
      <div className="city">
        <div className="city-image" style={style.image}></div>
        <div className="city-name">
          <span>{this.props.city.name}</span>
        </div>
      </div>
    );
  }
}
export default PopularCitiesCard;
