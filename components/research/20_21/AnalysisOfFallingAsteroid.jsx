import React from "react";
import Image from "next/image";

const AnalysisOfFallingAsteroid = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Engineering behind a Falling Asteroid Analyzed</h2>
        <Image
          src="/research/20_21/falling_asteroid.png"
          height="600px"
          width="900px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        This short project was completed by a team of senior researchers at
        SIME. The project focuses on the analysis of an asteroid entering our
        atmosphere using various factors such as temperature distribution,
        pressure distribution, velocity analysis and density variation. Such
        analysis can help in analysing the true mass, volume an speed of the
        asteroid with which it entered the planet's atmosphere.
      </p>
    </div>
  );
};

export default AnalysisOfFallingAsteroid;
