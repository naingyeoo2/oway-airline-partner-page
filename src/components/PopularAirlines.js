import React, { Component } from "react";

import "./popular-airlines.scss";

// import { airlines } from "../constants/constants";

import PopularAirlineCard from "./PopularAirlineCard";
import { loadAirlines } from "../actions";
import { connect } from "react-redux";
import Loading from "./Loading";

class PopularAirlines extends Component {
  componentDidMount() {
    this.props.loadAirlines();
  }
  render() {
    return (
      <div>
        {this.props.initialState && this.props.initialState.isLoading ? (
          <Loading />
        ) : (
          <div className="popular-airline">
            <div className="app-container">
              <div className="airline-block">
                <div className="col-title">
                  <h2 className="header-title">
                    <span>Popular Airlines</span>
                    <small>for your best travel experience</small>
                  </h2>
                </div>
                <div className="block-for-col-image">
                  <div className="col-image">
                    <h3>
                      <span>
                        {this.props.initialState &&
                          this.props.initialState.partner[0].international
                            .title}
                      </span>
                    </h3>
                    <div className="popualr-airline-block">
                      {this.props.initialState &&
                        this.props.initialState.partner[0].international.airline_partner.map(
                          (airline) => (
                            <PopularAirlineCard
                              airline={airline}
                              key={airline.id}
                            />
                          )
                        )}
                    </div>
                  </div>
                  <div className="col-image">
                    <h3>
                      <span>
                        {this.props.initialState &&
                          this.props.initialState.partner[0].domestic.title}
                      </span>
                    </h3>
                    <div className="popualr-airline-block">
                      {this.props.initialState &&
                        this.props.initialState.partner[0].domestic.airline_partner.map(
                          (airline) => (
                            <PopularAirlineCard
                              airline={airline}
                              key={airline.id}
                            />
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    initialState: state.initialState,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    loadAirlines: () => dispatch(loadAirlines()),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(PopularAirlines);
