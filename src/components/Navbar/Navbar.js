import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const isActive = useMatch({
    path: '/',
    // exact: true,
  });
  return (
    <nav>
      <div className="logo-nav">
        <div className="logo">
          <img alt="logo" src="Images/logo.jpg" />
        </div>
        <h1>Space Travelers Hub</h1>
      </div>
      <div>
        <ul className="navbar">
          <li className="navbar-brand">
            <NavLink
              // exact
              className={isActive ? ' active-link' : 'nav-link'}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <br />
          <li className="navbar-brand">
            <NavLink
              className={useMatch('/missions') ? ' active-link' : 'nav-link'}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li className="v-line" />
          <li className="navbar-brand">
            <NavLink
              className={useMatch('/profile') ? ' active-link' : 'nav-link'}
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
