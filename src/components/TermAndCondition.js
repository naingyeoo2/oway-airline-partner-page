import React, { Component } from "react";
import "./app-container.scss";
import "./term-and-condition.scss";

class TermAndCondition extends Component {
  render() {
    return (
      <div className="term-and-condition">
        <div className="app-container">
          <h2>
            {this.props.termAndCondition && this.props.termAndCondition.title}
          </h2>
          <p>
            {this.props.termAndCondition &&
              this.props.termAndCondition.description}
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default TermAndCondition;
