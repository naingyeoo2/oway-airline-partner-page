import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { partners } from "../constants/constants";

import "./airline-partner.scss";

import Header from "./Header";
import Footer from "./Footer";
import PartnerCard from "./PartnerCard";
import Promotion from "./Promotion";
import CompanyOverview from "./CompanyOverview";
import PopularRoute from "./PopularRoute";
import PopularCities from "./PopularCities";
import FAQ from "./FAQ";
import TPBGroup from "./TPBGroup";
import PartnerNavBar from "./PartnerNavBar";
import Loading from "./Loading";

class AirlinePartner extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const path = this.props.match.params.partnerSlug;
    this.setState({ isLoading: true });
    const filteredArray = partners.filter(
      (partner) => partner.keyword === path
    );
    this.setState(filteredArray[0]);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }
  render() {
    return (
      <div className="airline-partner">
        <Header />
        {this.state.isLoading ? (
          <div>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          <div>
            <PartnerCard name={this.state.name} image={this.state.img_url} />
            <PartnerNavBar />
            <CompanyOverview overview={this.state.overview} />
            <FAQ faq={this.state.faq} />
            <Promotion promotion={this.state.promotion} />
            <PopularCities popularCities={this.state.popular_cities} />
            {/* <PopularAirlines path={this.props.match.params.partnerSlug} /> */}
            <PopularRoute popularRoute={this.state.popular_route} />
            <TPBGroup
              termAndCondition={this.state.term_and_condition}
              privacyAndPolicy={this.state.privacy_and_policy}
              baggageAndFees={this.state.baggage_and_fees}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
export default withRouter(AirlinePartner);
