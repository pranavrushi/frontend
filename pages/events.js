import React, { useEffect } from "react";
import Events from "../components/Events";

const events = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("events");
  }, []);

  return <Events />;
};

export default events;
