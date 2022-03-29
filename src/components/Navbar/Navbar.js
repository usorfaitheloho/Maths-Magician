import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navBar">
    <div className="logo">Math</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="App">Calculator</Link></li>
      <li><Link to="Quotes">Quotes</Link></li>
    </ul>
  </div>
);

export default Navbar;
