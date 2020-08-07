import React, { Component } from "react";
import "./popular-cities-card.scss";

class PopularCitiesCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      image: {
        'backgroundImage':
          "url(" +
          require(`../assets/images/jpg/${this.props.city.img_url}`) +
          ")",
      },
    };
    return (
      <div className="city">
        <div className="city-image" style={style.image}>
          
        </div>
        <div className="city-name">
          <p>|&nbsp;{this.props.city.name}</p>
        </div>
      </div>
    );
  }
}
export default PopularCitiesCard;
