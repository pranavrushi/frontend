import React from "react";
import Image from "next/image";

const FuelRetailIndustry = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Fuel Retail Industry Problems Troubleshot by SIME Members</h2>
        <Image src="/research/20_21/fuel.jpg" height="600px" width="900px" />
      </div>

      <p style={{ fontSize: "18px" }}>
        This project was led by Shivansh Goyal with his teammates Rumi Bharti
        and Utkarsh at the Society for Industrial Management and Engineering.
        The project was regarding the modification of fuel stations to make the
        operation possible with minimal touchpoints in times of pandemic. The
        calculations done in the project show that the operation will become
        cost-efficient under 3 years of the initiation. Apart from this, the
        team also brought a very interesting solution for fulfilling the power
        demand of Electric Vehicle Fuel Station by using renewable energy
        sources like wind and solar energy. The team developed the concept of a
        hybrid model that exploits the energy from both wind and solar sources.
        They developed a robust Business for both their solutions after proper
        market study and customer survey.
      </p>
      <h5 className="text-success">Project Achievement :</h5>

      <b className="text-primary">
        Awarded second prize in Campus Innovathon 2020 that was organized by
        Gilbarco Veeder Root, India that saw participation in thousands from all
        over the country. Shivansh Goyal was also awarded with the title of ‘The
        Best Presenter’ in this competition.
      </b>
    </div>
  );
};

export default FuelRetailIndustry;
