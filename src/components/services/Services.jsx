import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <secton className="sevrices section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Front End <br /> Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Viev More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
              Front End <br /> Developer
              </h3>
              <p className="services__modal-description">
              Repairing, thank you for your understanding!
              </p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Loding...
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                   
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="bx bx-credit-card-front services__icon"></i>
            <h3 className="services__title">
            Full Stack <br /> Developer

            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Viev More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
          
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
              Full Stack <br /> Developer

              </h3>
              <p className="services__modal-description">
                Repairing, thank you for your understanding!
              </p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Loding...
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
          
            <i className="bx bxl-microsoft services__icon"></i>
            <h3 className="services__title">
              UX/UI <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Viev More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                UX/UI <br /> Designer
              </h3>
              <p className="services__modal-description">
              Repairing, thank you for your understanding!
              </p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    I have a new idea;
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Loading...
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </secton>
  );
};

export default Services;
