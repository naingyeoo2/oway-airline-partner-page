import React, { Component } from 'react'

import Header from './Header'
import NavBar from './NavBar'
import Cover from './Cover'
import Footer from './Footer'
import AirlinePartner from './AirlinePartner'

import './partner.scss'

export default class Partner extends Component {
    render() {
        return (
            <div div="partner">
                <Header />
                <NavBar />
                <Cover />
                <AirlinePartner />
                <Footer />
            </div>
        )
    }
}
