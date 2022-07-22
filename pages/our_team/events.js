import React, { useEffect } from "react";

const events = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return <div>events</div>;
};

export default events;
