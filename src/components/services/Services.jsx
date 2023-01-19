import React, { useState } from "react";
import "./services.css";
import blog from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const style = {
  //   position: "relatively",

  // };
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
            View More
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
                Hey! This is one of my freelance porject.
              </p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    <img className="blog__1" alt="Blog" src={blog} />
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus consequuntur provident iure, cumque ad id tempora ut
                    minima. Modi mollitia dolorum exercitationem assumenda iste
                    dolor saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minus
                    consequuntur provident iure, cumque ad id tempora ut minima.
                    Modi mollitia dolorum exercitationem assumenda iste dolor
                    saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste dolor saepe
                    eum, obcaecati ducimus dolore. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Minus consequuntur provident
                    iure, cumque ad id tempora ut minima. Modi mollitia dolorum
                    exercitationem assumenda iste dolor saepe eum, obcaecati
                    ducimus dolore.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    <img className="blog__1" alt="Blog" src={blog2} />
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus consequuntur provident iure, cumque ad id tempora ut
                    minima. Modi mollitia dolorum exercitationem assumenda iste
                    dolor saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minus
                    consequuntur provident iure, cumque ad id tempora ut minima.
                    Modi mollitia dolorum exercitationem assumenda iste dolor
                    saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste dolor saepe
                    eum, obcaecati ducimus dolore. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Minus consequuntur provident
                    iure, cumque ad id tempora ut minima. Modi mollitia dolorum
                    exercitationem assumenda iste dolor saepe eum, obcaecati
                    ducimus dolore.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    <img className="blog__1" alt="Blog" src={blog3} />
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus consequuntur provident iure, cumque ad id tempora ut
                    minima. Modi mollitia dolorum exercitationem assumenda iste
                    dolor saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minus
                    consequuntur provident iure, cumque ad id tempora ut minima.
                    Modi mollitia dolorum exercitationem assumenda iste dolor
                    saepe eum, obcaecati ducimus dolore. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minus consequuntur
                    provident iure, cumque ad id tempora ut minima. Modi
                    mollitia dolorum exercitationem assumenda iste dolor saepe
                    eum, obcaecati ducimus dolore. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Minus consequuntur provident
                    iure, cumque ad id tempora ut minima. Modi mollitia dolorum
                    exercitationem assumenda iste dolor saepe eum, obcaecati
                    ducimus dolore.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
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
            View More
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
                Ops! This site isn't ready yet. Just a moment!
              </p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam, ipsam molestiae dolorem nemo eum ratione rem atque
                    ad nostrum corporis provident, officia accusamus sed quo
                    delectus illum, minima debitis temporibus.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est hic ut esse incidunt nobis rerum eveniet nostrum
                    accusantium facilis, eum voluptas ea mollitia cum suscipit
                    commodi praesentium error aspernatur. Facilis?
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est hic ut esse incidunt nobis rerum eveniet nostrum
                    accusantium facilis, eum voluptas ea mollitia cum suscipit
                    commodi praesentium error aspernatur. Facilis?
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
            View More
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
              <p className="services__modal-description">No way!!!</p>
              <ul className="services__modal-serices grid">
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    I have a new idea; Please come back!
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Ex voluptates velit, eveniet nulla facere similique,
                    quas ratione vero eos incidunt quam unde in dolore
                    perspiciatis. Aperiam fugiat totam iste itaque.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="services__modal-icon"></i>
                  <p className="services__modal-info"></p>
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
