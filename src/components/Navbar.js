import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <image src="../images/logo.jpg" />
      </div>
      <ul className="navbar">
        <li className="navbar-brand">
          <h1>Space Travelers Hub</h1>
        </li>
        <li className="navbar-brand">
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
