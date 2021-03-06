import React, { Component } from "react";

import "./term-and-condition.scss";

class TermAndCondition extends Component {
  render() {
    return (
      <div className="term-and-condition">
        <h3 className="tpb-header">
          {this.props.termAndCondition && this.props.termAndCondition.title}
        </h3>
        <div className="facts">
          <ol>
            {this.props.termAndCondition &&
              this.props.termAndCondition.description.map((description, index) => (
                <li key={index}><span>{description.id}.</span>{description.description}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default TermAndCondition;
