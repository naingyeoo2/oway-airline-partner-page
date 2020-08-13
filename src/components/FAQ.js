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
            <center>
              <h2>{this.props.faq && this.props.faq.title}</h2>
              <div className="header-title">
                <small>
                  <span className="faq-quote">this is faq section</span>
                </small>
              </div>
            </center>
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
