import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { isPlatform } from "@ionic/react";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="landingMain">
      <Header />
      <main>
        <div className="heading">
          <h1>Product Headline</h1>
          <button className="btn btn-lg btn-warning mt-3 cta">
            <span>Call To Action</span>
          </button>
          {isPlatform("hybrid") ? (
            <Link to="/login" className="btn btn-warning login">
              Login <i className="fa fa-sign-in" aria-hidden="true"></i>
            </Link>
          ) : null}
        </div>
        <div className="feature-cards row">
          <Card title="Feature One" />
          <Card title="Feature Two" />
          <Card title="Feature Three" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
