import React, { Component } from "react";
import "./flights.scss";
import "./home.scss";
import PopularAirlines from "./PopularAirlines";
import Header from "./Header";
import NavBar from "./NavBar";
import Cover from "./Cover";
import Footer from "./Footer";

class Home extends Component {
  render() {
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
export default Home;
