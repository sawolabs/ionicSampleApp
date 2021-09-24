import React from "react"
import { Link } from "react-router-dom";
import Socialicons from "./Socialicons";



import LinkedinLogo from "../assets/SM-LinkedIn.svg";
import InstagramLogo from "../assets/SM-Instagram.svg";
import FacebookLogo from "../assets/SM-Facebook.svg";
import TwitterLogo from "../assets/SM_Twitter.svg";
import GitHubLogo from "../assets/SM-GitHub.svg";

import "./Footer.css";

const Footer = () => {
    return <footer>
    <div className="Footer_container__8-0SY container styling__footer__container">
      <div className="container-lg row">
        <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
          <div className="footer-columns">
            <div className="footer-column support" >
              <h6>Support</h6>
              <p>
                To get in touch with us <br />
                write to us at <br />
                <b>
                  <Link
                    to="mailto:contact@product.com"
                    style={{ color: "rgb(255, 255, 255) !important" }}
                  >
                    contact@product.com
                  </Link>
                </b>
              </p>
              <br />
              <p>
                Or speak to our customer
                <br />
                representative 
                <button className="btn btn-md btn-warning mx-2">
                  <b>chatbot</b>
                </button>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
          <div className="footer-columns quick-links">
            <div className="footer-column ">
              <h6>Quick Links</h6>
              <div className="footer-column">
                <ul>
                  <li>
                    <Link to="/pricing/#faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/docs">Docs</Link>
                  </li>
                  <li>
                    <Link to="/resources">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column mt-3">
              <br />
              <div className="col-md-12">
                <ul>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/community">Community</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Sponsorship Program</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-lg-3 col-xs-12 my-2">
          <div className="social-links">
            <p>Follow Us</p>
            <Socialicons src={LinkedinLogo} alt="linkedin logo" />
            <Socialicons src={InstagramLogo} alt="instagram logo" />
            <Socialicons src={FacebookLogo} alt="facebook logo" />
            <Socialicons src={TwitterLogo} alt="Twitter Logo" />
            <Socialicons src={GitHubLogo} alt="GitHub Logo" />
          </div>
          <br />
        </div>
      </div>
      <br />
      <hr />
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p style={{ color: "white"}}>All Rights Reserved | © Sawo Labs 2021</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;