import React, { Component } from "react";

import "./partner-navbar.scss";

class PartnerNavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
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
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  // useEffect(() => {
  //   window.addEventListener('scroll',this.handleScroll)
  // })
  handleScroll=()=>{
    const offset = window.scrollY;
    if(offset >390 && offset < 1000){
      this.setState({
        scrolled: true,
        isOverview: true
      })
    }else if(offset >1000){
      this.setState({
        scrolled: true,
        isOverview: false
      })
    }
    else{
      this.setState({
        scrolled: false,
        isOverview: false
      })
    }

  //   if(offset >1000 && offset < 1520){
  //     this.setState({
  //       scrolled: true,
  //       isFaq: true
  //     })
  //   }else if(offset >1520){
  //     this.setState({
  //       scrolled: true,
  //       isFaq: false
  //     })
  //   }else{
  //     this.setState({
  //       scrolled: false,
  //       isFaq: false
  //     })
  //   }
    
  //   if(offset >1520 && offset < 1950){
  //     this.setState({
  //       scrolled: true,
  //       isPromotion: true
  //     })
  //   }else if(offset >1950){
  //     this.setState({
  //       scrolled: true,
  //       isPromotion: false
  //     })
  //   }else{
  //     this.setState({
  //       scrolled: false,
  //       isPromotion: false
  //     })
  //   }
    
  //   if(offset >1950 && offset < 2560){
  //     this.setState({
  //       scrolled: true,
  //       isPopularDestination: true
  //     })
  //   }else if(offset >2560){
  //     this.setState({
  //       scrolled: true,
  //       isPopularDestination: false
  //     })
  //   }else{
  //     this.setState({
  //       scrolled: false,
  //       isPopularDestination: false
  //     })
  //   }
    
  //   if(offset >2560 && offset < 3150){
  //     this.setState({
  //       scrolled: true,
  //       isPopularRoute: true
  //     })
  //   }else if(offset >3150){
  //     this.setState({
  //       scrolled: true,
  //       isPopularRoute: false
  //     })
  //   }else{
  //     this.setState({
  //       scrolled: false,
  //       isPopularRoute: false
  //     })
  //   }
  }

  render() {
    return (
      <div className="reactcomp-anchor-nav content-padding">
        <div className="app-container">
          <div className="nav-bar-box">
            <nav
              className={
                this.state.scrolled
                  ? "nav-bar-wrapper nav-fixed"
                  : "nav-bar-wrapper"
              }
            >
              <ul className="nav-bar-list">
                <li className={this.state.isOverview? 'nav-bar-li actived' : 'nav-bar-li'}>
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
