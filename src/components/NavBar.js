import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Nav = () => (
  <nav className="nav-bar">
    <h1>Calculator Rod.</h1>
    <ul className="nav-list">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/calculator">Calculator</NavLink></li>
      <li><NavLink to="/quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
