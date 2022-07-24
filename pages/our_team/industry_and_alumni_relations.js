import React, { useEffect } from "react";

const industry_and_alumni_relations = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Industry and alumni relations team
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
    </div>
  );
};

export default industry_and_alumni_relations;
