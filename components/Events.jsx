import React from "react";
import Image from "next/image";
import styles from "../styles/Events.module.css";

const Events = () => {
  return (
    //  Event Details
    <div className="container-fluid ">
      <h1
        className={`h1-heading ${styles.events_heading} mt-4 d-flex justify-content-center`}
      >
        Our Events
      </h1>
      <hr style={{ width: "250px", margin: "auto" }} />
      <div style={{ textAlign: "center" }}>
        <h5
          style={{
            textTransform: "none",
            textAlign: "left",
            margin: "30px",
            lineHeight: "30px",
          }}
        >
          SIME events are a platform to sharpen our skills and progress further
          via the means of an effective and healthy competition. The events aim
          to motivate and provide a platform for eager students from various
          fields to compete and come out on top from amongst their fellow
          counterparts. Events are a fun and innovative way to inculcate the
          spirit of competition among the participants while putting them up
          against formidable challenges and bringing the best out of them.
        </h5>
      </div>
      {/* Anvil  */}
      <div className="row">
        <div className="py-5 px-5">
          <div className="row">
            <div className="col-md-8">
              <h1
                className="xlarge-font"
                style={{ color: "MediumSeaGreen", textAlign: "center" }}
              >
                <b>Anvil</b>
              </h1>
              <p className="container">
                <span style={{ fontSize: "24px" }}>Anvil</span> was the very
                first online event organized by SIME on its social media
                handles. The idea was to challenge the participants to solve
                riddles based on pictures and few hints. The challenge has four
                levels of questions with different weightage. Questions were
                based on “Basics of Mechanics” & “Production Lab”. The speed of
                answering riddles is one of the essential factors for completing
                the quiz. The event lasted for up to four days with three
                winners.
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src="/events/anvil.jpg"
                width="320px"
                height="320px"
                alt="anvil.jpg"
              />
            </div>
          </div>
        </div>
        <br />

        {/* CIC  */}
        <div className="py-5 px-5" style={{ backgroundColor: "#f1f1f1" }}>
          <div className="row">
            <div className="col-md-4">
              <Image
                src="/events/code_industry_challenge.png"
                width="320"
                height="320"
                alt="code_industry_challenge.png"
              />
            </div>
            <div className="col-md-8">
              <h1
                className="xlarge-font"
                style={{ color: "MediumSeaGreen", textAlign: "center" }}
              >
                <b>code industry challenge</b>
              </h1>
              <p className="container">
                <span style={{ fontSize: "24px" }}>
                  Code Industry Challenge{" "}
                </span>
                is SIME’s intra campus coding challenge which focused on
                problem-solving related to industrial operations, network
                optimization, transportation, game theory, etc. Participants
                hold the liberty to use any programming language also study
                links are provided beforehand to better understand the
                algorithms. The responses are evaluated on the effectiveness of
                algorithms and the timing of submission.
              </p>
            </div>
          </div>
        </div>

        {/* The App Section  */}
        <div className="py-5 px-5">
          <div className="row">
            <div className="col-md-8">
              <h1
                className="xlarge-font"
                style={{ color: "MediumSeaGreen", textAlign: "center" }}
              >
                <b>Asta Di autos</b>
              </h1>
              <p className="container">
                <span style={{ fontSize: "36px" }}>Asta Di Autos</span> is an
                event organized by SIME which is one of its kind as it gives a
                platform to the participants to enter an auction as automobile
                tycoons where they have to buy and make the best vehicle using
                the auctioned parts. For winning this event, every team had to
                fight through 3 rounds. Different components were auctioned and
                every team had a fixed capital for the bidding. The teams were
                judged on the basis of their vehicle’s strength, speed and how
                economic it is.
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src="/events/asta_di_autos.jpg"
                width="320"
                height="320"
                alt="asta_di_autos.jpg"
              />
            </div>
          </div>
        </div>

        {/* Supply game  */}
        <div className="py-5 px-5" style={{ backgroundColor: "#f1f1f1" }}>
          <div className="row">
            <div className="col-md-4 col-md-sm-12">
              <Image
                src="/events/supply_game.jpg"
                width="320px"
                height="320px"
              />
            </div>
            <div className="col-md-8 col-md-sm-12">
              <h1
                className="xlarge-font"
                style={{ color: "MediumSeaGreen", textAlign: "center" }}
              >
                <b>supply game</b>
              </h1>
              <p className="container">
                <span style={{ fontSize: "24px" }}>Supply Game</span> is a
                competition organized by SIME for the enthusiastic aspirants, it
                revolves around planning and execution of supply chain
                management, and the event also brings a huge experience of how
                product-based companies function in their supply chain,
                logistics, and transportation management. It consists of two
                rounds first is the optimization round, in which participants
                will have to submit their ideas of warehouse management and
                explain their thoughts which gives immense knowledge of how the
                industry works, and in the second round, the participants have
                to showcase their presentation to the jury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
