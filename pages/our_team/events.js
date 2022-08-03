import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const events = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>Events</p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <CardComponent
        name="Mayank Kumar"
        position="Director"
        img="/ourTeam/k19/mayank.jpg"
        linkedin="https://www.linkedin.com/in/mayank-kumar-b49108207/"
      />
      <CardComponent
        name="Harsh Sarve"
        position="Chief Strategist"
        img="/ourTeam/k20/harsh_keshao_sarve.jpg"
        linkedin="https://www.linkedin.com/in/harsh-sarve-3a47ba156"
      />
      <CardComponent
        name="Moupriya Ghosh "
        position="Strategist"
        img="/ourTeam/k20/moupriya_ghosh.jpeg"
        linkedin="https://www.linkedin.com/in/moupriya-ghosh-b8854021a"
      />
      <CardComponent
        name="Prakhar Chauhan"
        position="Strategist"
        img="/ourTeam/k20/prakhar_chauhan.jpg"
        linkedin="https://www.linkedin.com/in/moupriya-ghosh-b8854021a"
      />
      <CardComponent
        name="Rohit Pande"
        position="Strategist"
        img="/ourTeam/k20/rohit.jpg"
        linkedin="https://www.linkedin.com/in/rohit-pande-0a5846237/"
      />
      <CardComponent
        name="Shem Vishal"
        position="Executive"
        img="/ourTeam/k21/shem_vishal.jpeg"
        linkedin=""
      />
      <CardComponent
        name="Debanshu Banerjee"
        position="Executive"
        img="/ourTeam/k21/debanshu_banerjee.jpg"
        linkedin="https://www.linkedin.com/in/debanshu-banerjee-b9091a22b"
      />
    </div>
  );
};

export default events;
