import React, { Component } from "react";
import "./faq-card.scss";

class FaqCard extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isShow: true,
    };
  }
  isShowText = () => {
    this.state.isShow
      ? this.setState({ isShow: false })
      : this.setState({ isShow: true });
  };
  render() {
    return (
      <div className="faq-card">
        <li>
          <h3 className="question" onClick={() => this.isShowText()}>
            {this.state.isShow ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
            {this.props.question.question}&nbsp;
          </h3>

          {this.state.isShow ? (
            <p className="show-answer">{this.props.question.answer}</p>
          ) : (
            <p className="dont-show-answer">{this.props.question.answer}</p>
          )}
        </li>
      </div>
    );
  }
}
export default FaqCard;
