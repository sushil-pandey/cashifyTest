import React, { Component } from "react";
import {BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';

class Routes extends Component {


    render() {
        return (
            <div >
                <Route path="/" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/testimonial" component={Testimonial} />
                <Route path="/contactUs" component={ContactUs} />

            </div>
        )
    }
}

export default Routes;