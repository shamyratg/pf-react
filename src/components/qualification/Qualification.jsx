import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My journey through</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Uludag University</h3>
                <span className="qualification__subtitle">Bursa/Turkiye </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Online Courses</h3>
                <span className="qualification__subtitle">Online</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Wsb University</h3>
                <span className="qualification__subtitle">Poland</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              {/* <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}
              {/* <div>
                <h3 className="qualification__title">2 Director</h3>
                <span className="qualification__subtitle">Turkey Uni </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div> */}
            </div>
          </div>
          <div
          className={
            toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
        >
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Merv Dis. Tic</h3>
              <span className="qualification__subtitle">Ist/Turkey</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>Jun 2021-Sep 2021
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">TrainMedia</h3>
              <span className="qualification__subtitle">Bursa/Turkey</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>Oct 2021-Jan 2022
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Freelance</h3>
              <span className="qualification__subtitle">Europe</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>2022-Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
        </div>


      </div>
    </section>
  );
};

export default Qualification;
