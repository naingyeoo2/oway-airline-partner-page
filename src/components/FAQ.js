import React, { Component } from "react";

import "./faq.scss";

import { Collapse } from "antd";

const { Panel } = Collapse;

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
            <Collapse
              accordion
              defaultActiveKey={["0"]}
              expandIconPosition={"right"}
              bordered={false}
              className="site-collapse-custom-collapse"
            >
              {/* <Panel header="This is panel header 0" key="0">
                <p>asdfsffs</p>
              </Panel>
              <Panel header="This is panel header 1" key="1">
                <p>asdfsffs</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>asdfsffs</p>
              </Panel> */}
              {this.props.faq &&
                this.props.faq.questions.map((question, index) => (
                  <Panel
                    header={question.question}
                    key={index}
                    className="site-collapse-custom-panel"
                  >
                    <p>{question.answer}</p>
                  </Panel>
                ))}
            </Collapse>
            {/* <ul>
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
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
export default FAQ;
