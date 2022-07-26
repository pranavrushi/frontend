import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="container-fluid padding">
        <div className="row padding justify-content-around align-items-start">
          <div className="col-lg-7 about-section">
            <img
              loading="lazy"
              className="sime-logo my-3"
              src="/Sime_logo.png"
              alt="SIME-logo.png"
              style={{ width: "65%" }}
            />
            <h1 className="h1-heading" style={{ color: "#0e918c" }}>
              About us
            </h1>
            <p>
              The Society for Industrial Management and Engineering, BIT Mesra
              is a platform for students with an affinity for industrial
              science, technology, and management. The objective of the society
              is to organize various events, training programs, webinars and
              workshops to nurture industry enthusiasts and encourage innovation
              within its members through research projects. SIME aims to prepare
              the undergraduates of BIT Mesra for the ever-evolving fourth
              industrial revolution. Since it's inception, SIME has thrived to
              become a healthy learning ecosystem for students from departments
              like Mechanical, Production, Biotechnology, Chemical, CHP, ECE,
              Food Technology and others. The members are passionate to grow
              their skills and eventually provide benefits to the student
              community through various events, magazines, publications, youtube
              and social media series.
            </p>
          </div>
          <div className="col-lg-3 fb-page">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsime.bitmesra%2F&tabs=timeline&width=285px&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
              width="275px"
              height="475"
              style={{ border: "none ,overflow:hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              loading="lazy"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="sponsor my-4"
        style={{ textAlign: "center", color: "rgb(14, 145, 140)" }}
      >
        <h1>SEASON 2020-21 AFTERMOVIE</h1>
        <br />

        <iframe
          width="70%"
          height="315"
          src="https://www.youtube.com/embed/XFM-Gd8dO1g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutSection;
