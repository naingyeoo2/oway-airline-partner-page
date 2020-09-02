import React, { Component } from "react";

import "./home.scss";

import PopularAirlines from "./PopularAirlines";
import Header from "./Header";
import NavBar from "./NavBar";
import Cover from "./Cover";
import Footer from "./Footer";
import { connect } from "react-redux";
import { loadAirlines } from "../actions";
// import { airlines } from "../constants/constants";s

class Home extends Component {
  componentDidMount() {
    // this.props.loadAirlines();
  }
  render() {
    console.log(this.props.initialState && this.props.initialState.partner);
    return (
      <div>
        <Header />
        <NavBar />
        <Cover />
        <PopularAirlines />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialState: state.initialState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadAirlines: () => dispatch(loadAirlines()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
