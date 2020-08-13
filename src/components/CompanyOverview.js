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
  showMore() {
    this.state.isShowMore
      ? this.setState({ isShowMore: false })
      : this.setState({ isShowMore: true });
  }
  render() {
    return (
      <div className="company-overview">
        <div className="app-container">
          <div className="overview">
            <center>
              <h2>Company Overview</h2>

              {this.props.overview &&
                (this.state.isShowMore ? (
                  <div className="more-overview-text">
                    {this.props.overview.description}
                  </div>
                ) : (
                  <div className="overview-text">
                    {this.props.overview.description}
                  </div>
                ))}
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
        </div>

        <hr></hr>
      </div>
    );
  }
}
export default CompanyOverview;
