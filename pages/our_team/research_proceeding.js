import React, { useEffect } from "react";

const research_proceeding = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return <div>research_proceeding</div>;
};

export default research_proceeding;
