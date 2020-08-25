import React, { Component } from "react";

import "./company-overview.scss";

class CompanyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialHeight: 0,
      textHeight: 0,
      isShowMore: false,
    };
  }
  componentDidMount() {
    let height = document.getElementById("overview-text-id").clientHeight;
    this.setState({ textHeight: height });
    if (height > 180) {
      this.setState({ textHeight: height, initialHeight: 180 });
    } else {
      this.setState({ textHeight: height });
    }
  }
  showMore() {
      this.state.isShowMore
        ? this.setState({ isShowMore: false })
        : this.setState({ isShowMore: true });
  }
  render() {
    const style = {
      showAllText: {
        height: this.state.textHeight,
      },
      showMoreText: {
        height: this.state.textHeight,
        transition: "0.4s all ease-in",
      },
      showLessText: {
        height: this.state.initialHeight,
        transition: "0.4s all ease-in",
      },
    };
    return (
      <div className="overview-wrap content-padding" id="overview">
        <div className="app-container">
          <h2 className="header-title">
            <span>{this.props.overview && this.props.overview.title}</span>
            <small>this is company overview</small>
          </h2>
          {this.state.textHeight > 180 ? (
            <div>
              <div className="overview-text-wrap">
                <div
                  className="overviewText"
                  style={
                    this.state.isShowMore
                      ? style.showMoreText
                      : style.showLessText
                  }
                >
                  <div
                    id="overview-text-id"
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
          ) : (
            <div className="overview-text-wrap">
              <div className="overviewText" style={style.showAllText}>
                <div
                  id="overview-text-id"
                  dangerouslySetInnerHTML={{
                    __html:
                      this.props.overview && this.props.overview.description,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default CompanyOverview;

// import React, { Component } from "react";

// import "./company-overview.scss";

// class CompanyOverview extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowMore: false,
//       height: 0,
//       initialHigh: 0,
//     };
//   }
//   componentDidMount() {
//     const height = document.getElementById("overview-text-height").clientHeight;
//     if (height > 180) {
//       this.setState({ height, initialHigh: 180 });
//     } else {
//       this.setState({ height });
//     }
//   }
//   showMore = () => {
//     this.state.isShowMore
//       ? this.setState({ isShowMore: false })
//       : this.setState({ isShowMore: true });
//   };
//   // overview = () =>
//   //   this.state.isShowMore ? "overview-text active" : "overview-text";

//   render() {
//     const style = {
//       overviewTextShowMore: {
//         height: this.state.initialHigh,
//         // transition: "none",
//       },
//       overviewTextShowInitialHigh: {
//         height: this.state.height,
//         // transition: "none",
//       },
//       overviewTextShowLess: {
//         height: "150px",
//         // transition: "none",
//       },
//     };

//     return (
//       <div className="overview-wrap content-padding" id="overview">
//         <div className="app-container">
//           <h2 className="header-title">
//             <span>{this.props.overview && this.props.overview.title}</span>
//             <small>this is company overview</small>
//           </h2>
//           {this.state.height < 180 ? (
//             <div className="overview-text-wrap">
//               <div
//                 className="overviewText"
//                 style={{ height: this.state.height }}
//               >
//                 <div
//                   id="overview-text-height"
//                   dangerouslySetInnerHTML={{
//                     __html:
//                       this.props.overview && this.props.overview.description,
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ) : (
//             //========= Show more text div ================
//             <div>
//               {this.state.height&
//               <div className="overview-text-wrap">
//               <div
//                 className="overviewText"
//                 style={
//                   this.state.isShowMore
//                     ? style.overviewTextShowInitialHigh
//                     : style.overviewTextShowMore
//                 }
//               >
//                 <div
//                   id="overview-text-height"
//                   dangerouslySetInnerHTML={{
//                     __html:
//                       this.props.overview && this.props.overview.description,
//                   }}
//                 ></div>
//               </div>
//             </div>
//               }
//               <div className="overview-text-wrap">
//                 <div
//                   className="overviewText"
//                   style={style.overviewTextShowLess}
//                 >
//                   <div
//                     id="overview-text-height"
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         this.props.overview && this.props.overview.description,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {/** ============= Show More/ Show Less button  =============*/}
//           <div>
//             {this.state.height > 180 ? (
//               <div className="show-more" title="Company Overview">
//                 {this.state.isShowMore ? (
//                   <span onClick={() => this.showMore()}>
//                     <i className="arrow up"></i>Show Less
//                   </span>
//                 ) : (
//                   <span onClick={() => this.showMore()}>
//                     <i className="arrow down"></i>Show More
//                   </span>
//                 )}
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default CompanyOverview;
