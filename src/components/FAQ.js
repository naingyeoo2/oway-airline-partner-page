import React, { Component } from "react";

import "./faq.scss";

import FaqCard from "./FaqCard";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: 0,
    };
  }
  render() {
    return (
      <div className="faq-wrap content-padding" id="faqs">
        <div className="app-container">
          <h2 className="header-title">
            <span>{this.props.faq && this.props.faq.title}</span>
            <small>this is faq section</small>
          </h2>
          <div>
            <ul>
              {this.props.faq &&
                this.props.faq.questions.map((question, index) => (
                  <FaqCard
                    question={question}
                    key={index}
                    current={index}
                    showItem={this.state.showItem}
                    callbackParent={(currentItem) =>
                      this.setState({ showItem: currentItem })
                    }
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default FAQ;
