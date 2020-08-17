import React, { Component } from "react";

import "./company-overview.scss";

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
      <div className="overview-wrap content-padding overview" id="overview">
        <div className="app-container">
          <h2>{this.props.overview && this.props.overview.title}</h2>

          <div className="overview-text-wrap">
            <div className={this.overview()}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    this.props.overview && this.props.overview.description,
                }}
              ></div>
            </div>
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
        </div>
      </div>
    );
  }
}
export default CompanyOverview;
