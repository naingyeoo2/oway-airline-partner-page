import React, { Component } from 'react'

import './popular-route-card.scss';

class PopularRouteCard extends Component {
    render() {
        return (
            <div>
                <div className="popular-route-card">
                    {this.props.route.from}<div className="route-icon"></div>{this.props.route.to}
                </div>
            </div>
        )
    }
}
export default PopularRouteCard;