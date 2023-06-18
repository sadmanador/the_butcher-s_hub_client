import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 lg:px-32 bg-slate-800 text-slate-400">
      <div>
        <img className="w-14 rounded" src="assets/logo.jpg" alt="" />
        <p className="font-bold">
          The Butcher's Hub Ltd. <br />
          Providing expert chefs since 1972
        </p>
        <p>Copyright © 2026 - All right reserved</p>
      </div>
      <div>
        <span className="footer-title">Recipes from chefs</span>
        <Link to="/chef/1" className="link link-hover">
          John Doe
        </Link>
        <Link to="/chef/2" className="link link-hover">
          Jason Smith
        </Link>
        <Link to="/chef/3" className="link link-hover">
          Bob Johnson
        </Link>
        <Link to="/chef/4" className="link link-hover">
          Maria Gonzalez
        </Link>
        <Link to="/chef/5" className="link link-hover">
          John Lee
        </Link>
        <Link to="/chef/6" className="link link-hover">
          Michael Chen
        </Link>
      </div>
      <div>
        <span className="footer-title">Our Services</span>
        <Link to="/login" className="link link-hover">
          Login
        </Link>
        <Link to="/register" className="link link-hover">
          Register
        </Link>
        <Link to="/blogs" className="link link-hover">
          Blog
        </Link>
        <Link to="/favorite" className="link link-hover">
          Favorite
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
