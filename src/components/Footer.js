import React from 'react';

import './Footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
  return (
      <div style={{backgroundColor: '#ccc'}} className="navbar-dark bg-dark">
        <footer className="page-footer font-small text-white pt-4">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="text-uppercase">
                  <img src={require('../assets/icons/LogoWithTextWSVG.svg')} alt="Logo" height={50} width={50}/> Covid
                  19 Latest Updates of the World</h5>
                <p className="Footer-Text">With the Pandemic affecting everyone around the globe, we want you to stay
                  updated with the live
                  count and updates of India and the World.</p>

              </div>

              <hr className="clearfix w-100 d-md-none pb-3"/>

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Quick Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <Link className="Footer-Link" to={"/"}>About Us</Link>
                  </li>
                  <li>
                    <Link className="Footer-Link" to={"/mapbox"}>Mapbox</Link>
                  </li>
                  <li>
                    <Link className="Footer-Link" to={"/"}>Helpful Links</Link>
                  </li>
                  <li>
                    <a href="https://github.com/SanchitB23/Covid19Status" className="Footer-Link">Link to Repository</a>
                  </li>
                </ul>

              </div>

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <Link className="Footer-Link" to={"/"}>Github</Link>
                  </li>
                  <li>
                    <Link className="Footer-Link" to={"/"}>StackOverflow</Link>
                  </li>
                  <li>
                    <Link className="Footer-Link" to={"/"}>LinkedIn</Link>
                  </li>
                  <li>
                    <Link className="Footer-Link" to={"/"}>Email ID</Link>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a className="Footer-Link" href="https://github.com/SanchitB23">SanchitB23</a>
          </div>

        </footer>
      </div>
  );
}

export default Footer;
