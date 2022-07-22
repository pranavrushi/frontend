import React, { useEffect } from "react";

const workshops = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return <div>workshops</div>;
};

export default workshops;
