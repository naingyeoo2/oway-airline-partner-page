import React, { Component } from "react";
import "./flights.scss";
import { Link, Router } from "react-router-dom";

class Flights extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={this.props.path == this.props.item.link ? { 'display': 'none'} : {}}>
        <Link to={`partner/${this.props.item.link}`}>
          <div className="card">
            <div className="airline-image">
              <img
                src={require(`../assets/images/svg/${this.props.item.image_url}`)}
                width="90%"
                height="90%"
              />
            </div>
            <div className="airline-name">
              <h3>{this.props.item.name}</h3>
            </div>
            <div className="link">
              <span>See More</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default Flights;
