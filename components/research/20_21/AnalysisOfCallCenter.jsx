import React from "react";
import Image from "next/image";

const AnalysisOfCallCenter = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Lean Six Sigma Analysis of a Call Center</h2>
        <Image
          src="/research/20_21/call_center.jpg"
          height="600px"
          width="900px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        Machine Learning techniques were used by a team of senior researchers at
        society to analyze the behaviour of customers calling to a call center
        based on the time duration of call. This was part of a lean six sigma
        project in which they were trying to understand the underlying root
        cause behind the falling rating of a call center (data provided by
        Institute of Business and Industrial Statistics of the University of
        Amsterdam). They found out a correlation of 0.7 between the time
        duration of call and whether a customer hung up the call in between or
        the problem was solved. The analysis suggested that call duration needs
        to be further analyzed and employees should be trained to conclude the
        call in a certain time frame.
      </p>
    </div>
  );
};

export default AnalysisOfCallCenter;
