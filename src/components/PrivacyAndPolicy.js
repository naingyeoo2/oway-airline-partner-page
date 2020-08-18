import React, { Component } from "react";

import "./privacy-and-policy.scss";

class PrivacyAndPolicy extends Component {
  render() {
    return (
      <div className="privacy-and-policy">
        <h3>
          {this.props.privacyAndPolicy && this.props.privacyAndPolicy.title}
        </h3>
        <hr></hr>
        <div className="facts">
          <ol>
            {this.props.privacyAndPolicy &&
              this.props.privacyAndPolicy.description.map((description, index) => (
                <li key={index}><span>{description.id}.</span>{description.description}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default PrivacyAndPolicy;
