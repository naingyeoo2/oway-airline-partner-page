import React, { Component } from "react";
import "./term-and-condition.scss";

class TermAndCondition extends Component {
  render() {
    return (
      <div className="term-and-condition">
        <h3>
          {this.props.termAndCondition && this.props.termAndCondition.title}
        </h3>
        <hr></hr>
        <div className="facts">
          <ol>
            {this.props.termAndCondition &&
              this.props.termAndCondition.description.map((description) => (
                <li><span>{description.id}.</span>{description.description}</li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default TermAndCondition;
