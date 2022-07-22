import React from "react";
import Image from "next/image";

const TennisRacketDesign = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Tennis Racket Design Being Re-Engineered!</h2>
        <Image
          src="/research/20_21/tennis_racket.jpg"
          height="600px"
          width="900px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        A team of senior researchers at SIME, BIT Mesra are analysing the
        vibrational aspect of tennis racket design. Rackets are subjected to a
        very high variation in impact load, angle of strike, velocity and more
        which makes it a very interesting component to analyse and optimize it's
        design that shall be stiff, light and should provide an exceptional
        'feel' to the player. In the picture, you see one of the modal shapes of
        a fundamental model of tennis racket design. Based on the analysis,
        design will be further modified and correlation between various factors
        and racket behaviour will be worked upon.
      </p>
    </div>
  );
};

export default TennisRacketDesign;
