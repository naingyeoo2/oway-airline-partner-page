import React, { Component } from "react";
import "./app-container.scss";
import "./faq.scss";
import FaqCard from "./FaqCard";

class FAQ extends Component {
  render() {
    return (
      <div className="faq">
        <div className="app-container">
          <div className="faq">
            <h2>{this.props.faq && this.props.faq.title}</h2>
            <div>
              <ul>
                {this.props.faq &&
                  this.props.faq.questions.map((question, index) => (
                    <FaqCard question={question} key={index} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default FAQ;
