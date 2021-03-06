import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand" href="#">
          <img src={require('../assets/icons/LogoWithTextWSVG.svg')} alt="Logo" height={40} width={40}/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mapbox" className="nav-link" href="#">World Map</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/india" className="nav-link" href="#">India Updates</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Header;
