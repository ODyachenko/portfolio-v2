import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Navbar() {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <span className="nav__brand">oleh-diachenko</span>
        <div
          onClick={() => setActiveBurger(!activeBurger)}
          className={`hamburger hamburger--spin ${
            activeBurger ? 'active' : ''
          }`}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <div
          onClick={() => setActiveBurger(false)}
          className={`nav__list ${activeBurger ? 'active' : ''}`}
        >
          <NavLink to="/" className="nav__list-link">
            _hello
          </NavLink>
          <NavLink to="/about" className="nav__list-link">
            _about-me
          </NavLink>
          <NavLink to="/projects" className="nav__list-link">
            _projects
          </NavLink>
          <NavLink to="/contacts" className="nav__list-link nav__list--contact">
            _contact-me
          </NavLink>
        </div>
        <span className="nav__overflow"></span>
      </div>
    </nav>
  );
}

export default Navbar;
