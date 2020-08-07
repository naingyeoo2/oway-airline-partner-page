import React, { Component } from "react";
import "./app-container.scss";
import "./privacy-and-policy.scss";

class PrivacyAndPolicy extends Component {
  render() {
    return (
      <div className="privacy-and-policy">
        <div className="app-container">
          <h2>
            {this.props.privacyAndPolicy && this.props.privacyAndPolicy.title}
          </h2>
          <p>
            {this.props.privacyAndPolicy &&
              this.props.privacyAndPolicy.description}
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default PrivacyAndPolicy;
