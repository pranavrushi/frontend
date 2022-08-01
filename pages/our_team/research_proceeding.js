import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const research_proceeding = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Research proceeding team
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
      <CardComponent
        name="Shashank Kumar Singh"
        position="Director"
        img="/ourTeam/k19/shashank_kumar_singh.jpg"
        linkedin="https://www.linkedin.com/in/shashank-kumar-singh-571343204/"
      />
      <CardComponent
        name="Krishna Kumar Singh Garia"
        position="Director"
        img="/ourTeam/k19/krishna_garia.jpg"
        linkedin="https://www.linkedin.com/in/krishna-kumar-singh-garia-9070221a2/"
      />
      <CardComponent
        name="Ritika"
        position="Chief Strategist"
        img="/ourTeam/k20/ritika.jpeg"
        linkedin="www.linkedin.com/in/itsritika11"
      />
      <CardComponent
        name="Manav Mathur"
        position="Strategist"
        img="/ourTeam/k20/manav_mathur.jpg"
        linkedin="https://www.linkedin.com/mwlite/in/manav-mathur-26264122b"
      />
      <CardComponent
        name="HARI SURABH DWIVEDI"
        position="Strategist"
        img="/ourTeam/k20/hari_saurabh.jpg"
        linkedin="https://www.linkedin.com/in/harisaurabhdwivedi"
      />
      <CardComponent
        name="Abhishek kumar"
        position="Executive"
        img="/ourTeam/k21/abhishek.jpg"
        linkedin="https://www.linkedin.com/in/abhi-kumar-146920239"
      />
      <CardComponent
        name="Perumalla Satvik"
        position="Executive"
        img="/ourTeam/k21/perumalla_satvik.jpg"
        linkedin="www.linkedin.com/in/perumalla-satvik-419047229"
      />

    </div>
  );
};

export default research_proceeding;
