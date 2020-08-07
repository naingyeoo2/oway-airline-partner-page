import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { partners } from "../constants/constants";
import PartnerCard from "./PartnerCard";
import Promotion from "./Promotion";
import './airline-partner.scss'
import CompanyOverview from "./CompanyOverview";
import PopularRoute from "./PopularRoute";
import PopularCities from "./PopularCities";
import PopularAirlines from "./PopularAirlines";
import FAQ from "./FAQ";
import TermAndCondition from "./TermAndCondition";
import PrivacyAndPolicy from "./PrivacyAndPolicy";
import BaggageAndFees from "./BaggageAndFees";

class AirlinePartner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const path = this.props.match.params.partnerSlug;

    this.setState({ isLoading: true });
    const filteredArray = partners.filter((partner) => partner.keyword == path);
    this.setState(filteredArray[0]);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }
  render() {
    return (
      <div className="airline-partner">
        <Header />
        <NavBar />
        
        {this.state.isLoading ? 
        <div>loading...</div> 
        : 
        <div>
            <PartnerCard name={this.state.name} image={this.state.img_url} />
            <Promotion promotion={this.state.promotion} />
            <CompanyOverview overview={this.state.overview} />
            <PopularRoute popularRoute={this.state.popular_route} />
            <PopularCities popularCities={this.state.popular_cities} />
            <PopularAirlines path={this.props.match.params.partnerSlug}  />
            <FAQ faq={this.state.faq} />
            <TermAndCondition termAndCondition={this.state.term_and_condition} />
            <PrivacyAndPolicy privacyAndPolicy={this.state.privacy_and_policy} />
            <BaggageAndFees baggageAndFees={this.state.baggage_and_fees} />
        </div>
        }
        <Footer />
      </div>
    );
  }
}
export default withRouter(AirlinePartner);
