import React, { Component } from "react";

import "./faq-card.scss";

class FaqCard extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isShowAnswer: false,
      faqAnswerHeight: 0
    };
  }

  componentDidMount(){
    const height = document.getElementById(this.props.current).clientHeight;
    this.setState({
      faqAnswerHeight: height
    });
    (this.props.current === this.props.showItem) ?
      this.setState({isSisShowAnswerhow:true})
      :
      this.setState({isShowAnswer:false})
  }
  // isShowText = () => {
  //   this.state.isShow
  //     ? this.setState({ isShow: false })
  //     : this.setState({ isShow: true });
  // };

  showArrow = () => (this.state.isShowAnswer ? "arrow down" : "arrow right");

  getActiveItem = () => this.props.current === this.props.showItem ? "show-answer" : "hide-answer";
    
  render() {
    return (
      <li onClick={() => this.props.callbackParent(this.props.current)}>
        <div className="faq-card" id={this.props.current}>
          <h3 className="question">
            {this.props.question.question}
            <span>
              <i className={this.showArrow()}></i>
            </span>
          </h3>
          <p className={this.getActiveItem()}>{this.props.question.answer}</p>
        </div>
      </li>
    );
  }
}
export default FaqCard;
