import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const workshops = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>Workshops team</p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <CardComponent
        name="Roshan Agarwal"
        position="Director"
        img="/ourTeam/k19/roshan_agarwal.jpg"
        linkedin="https://www.linkedin.com/in/roshan-agarwal-profile/"
      />
      <CardComponent
        name="Rutuja Jagdale"
        position="Chief Strategist"
        img="/ourTeam/k20/rutuja.jpg"
        linkedin="https://www.linkedin.com/in/rutuja-jagdale-803a651b7"
      />
      <CardComponent
        name="Md Attesar Ahmad"
        position="Strategist"
        img="/ourTeam/k20/attesar_ahmad.jpg"
        linkedin="www.linkedin.com/in/attesar-ahmad-ab0a4021b"
      />
      <CardComponent
        name="Radhika Gandhi"
        position="Executive"
        img="/ourTeam/k21/radhika_gandhi.jpg"
        linkedin="https://www.linkedin.com/in/radhika-gandhi-277403228"
      />
      <CardComponent
        name="Rakesh Raman"
        position="Executive"
        img="/ourTeam/k21/rakesh_raman.JPG"
        linkedin="https://www.linkedin.com/in/rakesh-raman-32b23a232"
      />
    </div>
  );
};

export default workshops;
