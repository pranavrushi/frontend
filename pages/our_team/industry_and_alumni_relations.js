import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const industry_and_alumni_relations = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>Industry_and_Alumni_Relations</p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <CardComponent
        name="Bhagwan Singh"
        position="Director"
        img="/ourTeam/k19/bhagwan_singh.jpg"
        linkedin="https://www.linkedin.com/in/bhagwan-singh-rathore-0ba8561b4"
      />
      <CardComponent
        name="Deependu Jha"
        position="Chief Strategist"
        img="/ourTeam/k20/deependu_jha.jpg"
        linkedin="https://www.linkedin.com/in/bhavy-jaiswal-2b6004139"
      />
      <CardComponent
        name="Mahima Priya"
        position="Strategist"
        img="/ourTeam/k20/mahima_priya.png"
        linkedin="https://www.linkedin.com/in/mahima-priya-454382206"
      />
      <CardComponent
        name="Bhavy Jaiswal"
        position="Strategist"
        img="/ourTeam/k20/bhavy_jaiswal.jpg"
        linkedin="https://www.linkedin.com/in/bhavy-jaiswal-2b6004139"
      />
      <CardComponent
        name="Aditya Kumar"
        position="Executive"
        img="/ourTeam/k21/aditya.jpg"
        linkedin="https://www.linkedin.com/in/aditya-kumar-97ba63210"
      />
      <CardComponent
        name="Dhrub Narnolia"
        position="Executive"
        img="/ourTeam/k21/dhrub_narnolia.jpeg"
        linkedin="https://www.linkedin.com/in/dhruv-narnolia-2183b4224"
      />
    </div>
  );
};

export default industry_and_alumni_relations;
