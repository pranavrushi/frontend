import React from "react";
import Image from "next/image";

const AnalysisOfCoffeeManufacturing = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Here you will write your project heading</h2>
        <Image
          src="/research/21_22/six_sigma_analysis_coffee/sushalr1.jpeg"
          height="500px"
          width="500px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        Here you will write project description. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat, saepe unde asperiores eaque
        harum, iure aut, sequi praesentium consectetur tempora fugiat
        repellendus porro nostrum quae. Odio, dolore maxime totam minima
        dignissimos quibusdam qui a aut ipsam iure, neque earum non deserunt
        suscipit inventore cumque! Officiis quos rerum reprehenderit
        exercitationem saepe.
      </p>
    </div>
  );
};

export default AnalysisOfCoffeeManufacturing;
