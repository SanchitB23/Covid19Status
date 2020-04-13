import React from 'react';

import './Footer.css'

function Footer(props) {
  return (
      <div style={{backgroundColor: '#ccc'}} className="navbar-dark bg-dark">
        <footer className="page-footer font-small text-white pt-4">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>

              </div>

              <hr className="clearfix w-100 d-md-none pb-3"/>

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Quick Links</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Mapbox</a>
                  </li>
                  <li>
                    <a href="#">Helpful Links</a>
                  </li>
                  <li>
                    <a href="#">Link to Repository</a>
                  </li>
                </ul>

              </div>

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">Github</a>
                  </li>
                  <li>
                    <a href="#">StackOverflow</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Email ID</a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://github.com/SanchitB23"> SanchitB23</a>
          </div>

        </footer>
      </div>
  );
}

export default Footer;
