import React from "react";
import "./footer.css";
import footer from "../../assets/profile.jpg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="title_img" >
        
          <h1 className="footer__title">Shamyrat </h1>
          <img className="footer__img" src={footer} alt="" />
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/shamyrat-gutlygeldiyev-7836211a5/"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/shamyratg"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          Personal Portfolio. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
