import React, { Component } from "react";

import "./company-overview.scss";
import "./app-container.scss";

class CompanyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMore: false,
    };
  }
  showMore = () => {
    this.state.isShowMore
      ? this.setState({ isShowMore: false })
      : this.setState({ isShowMore: true });
  };
  overview = () =>
    this.state.isShowMore ? "overview-text active" : "overview-text";
  render() {
    return (
      <div className="company-overview"id="overview">
        <div className="overview">
          <center>
            <h2>Company Overview</h2>
            <div className={this.overview()}>
              {this.props.overview && this.props.overview.description}
            </div>
            <div className="show-more" title="Company Overview">
              {this.state.isShowMore ? (
                <span onClick={() => this.showMore()}>
                  <i className="arrow up"></i>Show Less
                </span>
              ) : (
                <span onClick={() => this.showMore()}>
                  <i className="arrow down"></i>Show More
                </span>
              )}
            </div>
          </center>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default CompanyOverview;
