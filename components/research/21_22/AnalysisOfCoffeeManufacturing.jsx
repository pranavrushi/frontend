import React from "react";
import Image from "next/image";

const AnalysisOfCoffeeManufacturing = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Lean Six Sigma Analysis of Coffee Manufacturing Facility</h2>
        <Image
          src="/research/21_22/six_sigma_analysis_coffee/sushalr1.jpeg"
          height="500px"
          width="500px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        This project was led by Badavath Sushal, a junior researcher at the
        society. It aims at analysis of supply chain data to understand the root
        cause of problem that is making the whole chain lag. Almost all quality
        improvement methods require data collection and analysis to solve
        quality problems. The combination of six sigma and lean manufacturing
        creates a six sigma lean approach which aims to reduce variations and
        waste. In this project, the correlation has been analysed between the
        caffeine content and the extraction time i.e how the extraction time
        would affect the caffeine content, and how can we optimize it for a
        better yield. Understanding the root cause of low quality helps to
        mitigate it, the process of removing such bottlenecks keeps going on.
      </p>
    </div>
  );
};

export default AnalysisOfCoffeeManufacturing;
