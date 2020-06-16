import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackGroundImage from './resources/bgImage.png';
import Home from './components/Home'
import {BrowserRouter as Router,  Link } from "react-router-dom";
import Routes from './Routes'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${BackGroundImage})`,flex: 1, height: '100%',position: 'fixed',
top: 0,
width:'100%',
backgroundSize: 'cover',}} >



<Router>
      <nav className="navbar ">
        <div >
          <ul className="navbar" style={{flexDirection: 'row'}}>

            <li >
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">Menu</Link>
            </li>
            <li>
              <Link to="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li>
              <Link to="/testimonial" className="nav-link">Testimonial</Link>
            </li>
            <li>
              <Link to="/contactUs" className="nav-link">ContactUs</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes />
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
