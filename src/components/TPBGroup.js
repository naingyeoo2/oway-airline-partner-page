import React, { Component } from "react";

import TermAndCondition from "./TermAndCondition";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import BaggageAndFees from "./BaggageAndFees";

import "./tpb-group.scss";

class TPBGroup extends Component {
  render() {
    return (
      <div className="tpb-group content-padding">
        <div className="app-container">
          <div className="tpb-group-block">
          <TermAndCondition termAndCondition={this.props.termAndCondition} />
          <PrivacyAndPolicy privacyAndPolicy={this.props.privacyAndPolicy} />
          <BaggageAndFees baggageAndFees={this.props.baggageAndFees} />
          </div>
        </div>
      </div>
    );
  }
}
export default TPBGroup;
