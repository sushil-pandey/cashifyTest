import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackGroundImage from './resources/bgImage.png';
import Home from './components/Home'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes'

function App() {
  return (
    <div className="App" style={{
       flex: 1, height: '100%', position: 'fixed',
      top: 0,
      width: '100%',
      backgroundSize: 'cover',
    }} >



      <Router>
        <div class="topnav" id="myTopnav">
        <Link to="/contactUs" className="topnav1">ContactUs</Link>
        <Link to="/testimonial" className="topnav1">Testimonial</Link>
        <Link to="/gallery" className="topnav1">Gallery</Link>
        <Link to="/menu" className="topnav1">Menu</Link>
        <Link to="/" className="topnav1">Home</Link>
        </div>

        <Routes />
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
