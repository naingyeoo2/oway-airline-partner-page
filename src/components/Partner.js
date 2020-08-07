import React, { Component } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Cover from './Cover'
import Home from './Home'
import Footer from './Footer'
import './partner.scss'
import AirlinePartner from './AirlinePartner'

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
