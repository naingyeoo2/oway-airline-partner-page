import React, { Component } from "react";

import "./faq-card.scss";

class FaqCard extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isShow: false,
      showKey: 0
    };
  }

  componentDidMount(){
    (this.props.showKey === this.state.showKey) ? 
      this.setState({isShow:true})
      :
      this.setState({isShow:false})
  }
  isShowText = () => {
    this.state.isShow?
    this.setState({isShow:false})
    :
    this.setState({isShow:true})
  };
  arrow = () => (this.state.isShow ? "arrow down" : "arrow right");

  render() {
    return (
      <li onClick={() => this.isShowText()}>
        <div className="faq-card">
          <h3 className="question">
            {this.props.question.question}
            <span>
              <i className={ this.arrow()}></i>
            </span>
          </h3>
          {this.state.isShow ? (
            <p className="show-answer">{this.props.question.answer}</p>
          ) : (
            <p className="hide-answer">{this.props.question.answer}</p>
          )}
        </div>
      </li>
    );
  }
}
export default FaqCard;
