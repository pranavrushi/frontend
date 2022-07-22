import React, { useEffect } from "react";
import CardComponent from "../../components/ourteam/CardComponent";

const core = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center d-flex justify-content-center my-2">
      core
      <br />
    </div>
  );
};

export default core;
