import React, { Component } from "react";

import "./partner-navbar.scss";

class PartnerNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverview: false,
      isFaq: false,
      isPromotion: false,
      isPopularDestination: false,
      isPopularRoute: false,
    };
  }
  overviewCheck() {
    this.setState({
      isOverview: true,
      isFaq: false,
      isPromotion: false,
      isPopularDestination: false,
      isPopularRoute: false,
    });
  }
  faqCheck() {
    this.setState({
      isFaq: true,
      isOverview: false,
      isPromotion: false,
      isPopularDestination: false,
      isPopularRoute: false,
    });
  }
  promotionCheck() {
    this.setState({
      isPromotion: true,
      isOverview: false,
      isFaq: false,
      isPopularDestination: false,
      isPopularRoute: false,
    });
  }
  populalrDestinationCheck() {
    this.setState({
      isPopularDestination: true,
      isOverview: false,
      isFaq: false,
      isPromotion: false,
      isPopularRoute: false,
    });
  }
  popularRouteCheck() {
    this.setState({
      isPopularRoute: true,
      isOverview: false,
      isFaq: false,
      isPromotion: false,
      isPopularDestination: false,
    });
  }
  // handleScroll=()=> {
  //   const offset = window.scrollY;
  //   if(offset >150){
  //     this.setState({
  //       scrolled: true
  //     })
  //   }else{
  //     this.setState({
  //       scrolled: false
  //     })
  //   }
  // }
  // componentDidMount(){
  //   window.addEventListener('scroll',this.handleScroll);
  // }

  render() {
    return (
      <div className="reactcomp-anchor-nav content-padding">
        <div className="app-container">
          <div className="nav-bar-box">
            <nav
              className={
                this.props.scrolled
                  ? "nav-bar-wrapper nav-fixed"
                  : "nav-bar-wrapper"
              }
            >
              <ul className="nav-bar-list">
                <li className={this.props.isOverview? 'nav-bar-li actived' : 'nav-bar-li'}>
                  <a
                    className="nav-bar-href"
                    href="#overview"
                    onClick={() => this.overviewCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Overview</span>
                    </div>
                  </a>
                </li>
                <li className={this.state.isFaq? 'nav-bar-li actived' : 'nav-bar-li'}>
                  <a
                    className="nav-bar-href"
                    href="#faqs"
                    onClick={() => this.faqCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>FAQs</span>
                    </div>
                  </a>
                </li>
                <li className={this.state.isPromotion? 'nav-bar-li actived' : 'nav-bar-li'}>
                  <a
                    className="nav-bar-href"
                    href="#promotions"
                    onClick={() => this.promotionCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Promotions</span>
                    </div>
                  </a>
                </li>
                <li className={this.state.isPopularDestination? 'nav-bar-li actived' : 'nav-bar-li'}>
                  <a
                    className="nav-bar-href"
                    href="#popular-cities"
                    onClick={() => this.populalrDestinationCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Popular Cities</span>
                    </div>
                  </a>
                </li>
                <li className={this.state.isPopularRoute? 'nav-bar-li actived' : 'nav-bar-li'}>
                  <a
                    className="nav-bar-href"
                    href="#popular-routes"
                    onClick={() => this.popularRouteCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Popular Route</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default PartnerNavBar;
