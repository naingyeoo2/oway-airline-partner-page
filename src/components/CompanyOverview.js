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
      <div className="overview">
        <div className="app-container">
          <center>
            <h2>Company Overview</h2>
          </center>
          {this.props.overview &&
            (this.state.isShowMore ? (
              <div className="">
                <p className="">{this.props.overview.description}</p>
              </div>
            ) : (
              <div className="overview-text">
                <p className="overview-text">
                  {this.props.overview.description}
                </p>
              </div>
            ))}
          <div className="show-more" onClick={() => this.showMore()}>
            {this.state.isShowMore ? <p>Show Less</p> : <p>Show More</p>}
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default CompanyOverview;
