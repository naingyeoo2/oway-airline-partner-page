import React, { Component } from "react";

import "./partner-navbar.scss";

class PartnerNavBar extends Component {
  constructor() {
    super();
    this.state = {
      isScrolled: false,
      isOverview: false,
      isFaq: false,
      isPromotion: false,
      isPopularDestination: false,
      isPopularRoute: false,
      overviewHeight: 0,
      faqHeight : 0,
      promotionHeight : 0,
      popularDestinationHeight : 0,
      popularRouteHeight : 0,
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
  //       isScrolled: true
  //     })
  //   }else{
  //     this.setState({
  //       isScrolled: false
  //     })
  //   }
  // }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    let overviewHeight = document.getElementById("overview").clientHeight;
    this.setState({ overviewHeight: overviewHeight });
    let faqHeight = document.getElementById("faqs").clientHeight;
    this.setState({ faqHeight: faqHeight });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // useEffect(() => {
  //   window.addEventListener('scroll',this.handleScroll)
  // })
  handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 225) {
      this.setState({
        isScrolled: true,
      });
    } else if (offset < 225) {
      this.setState({
        isScrolled: false,
      });
    }

    if (offset > 225 && offset < 700) {
      this.setState({
        isOverview: true,
        overviewHeight: this.state.overviewHeight+225,
      });
    } else {
      this.setState({
        isOverview: false
      });
    }

    if (offset > 700 && offset < 1200) {
      this.setState({
        isFaq: true,
      });
    } else {
      this.setState({
        isFaq: false,
      });
    }

    if (offset > 1200 && offset < 1650) {
      this.setState({
        isPromotion: true,
      });
    } else {
      this.setState({
        isPromotion: false,
      });
    }

    if (offset > 1650 && offset < 2260) {
      this.setState({
        isPopularDestination: true,
      });
    } else {
      this.setState({
        isPopularDestination: false,
      });
    }

    if (offset > 2260 && offset < 2700) {
      this.setState({
        isPopularRoute: true,
      });
    } else {
      this.setState({
        isPopularRoute: false,
      });
    }
  }

  render() {
    // console.log(this.state.overviewHeight);
    // console.log(this.state.faqHeight);
    return (
      <div className="reactcomp-anchor-nav">
        <div className="app-container">
          <div className="nav-bar-box">
            <nav
              className={
                this.state.isScrolled
                  ? "nav-bar-wrapper nav-fixed"
                  : "nav-bar-wrapper"
              }
            >
              <ul className="nav-bar-list">
                <li
                  className={
                    this.state.isOverview ? "nav-bar-li actived" : "nav-bar-li"
                  }
                >
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
                <li
                  className={
                    this.state.isFaq ? "nav-bar-li actived" : "nav-bar-li"
                  }
                >
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
                <li
                  className={
                    this.state.isPromotion ? "nav-bar-li actived" : "nav-bar-li"
                  }
                >
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
                <li
                  className={
                    this.state.isPopularDestination
                      ? "nav-bar-li actived"
                      : "nav-bar-li"
                  }
                >
                  <a
                    className="nav-bar-href"
                    href="#popular-cities"
                    onClick={() => this.populalrDestinationCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Popular Destinations</span>
                    </div>
                  </a>
                </li>
                <li
                  className={
                    this.state.isPopularRoute
                      ? "nav-bar-li actived"
                      : "nav-bar-li"
                  }
                >
                  <a
                    className="nav-bar-href"
                    href="#popular-routes"
                    onClick={() => this.popularRouteCheck()}
                  >
                    <div className="nav-bar-gap-wrapper">
                      <span>Popular Routes</span>
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
