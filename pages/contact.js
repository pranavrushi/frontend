import React, { useEffect } from "react";
import Contact from "../components/Contact";

const contact = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("contact");
  }, []);

  return (
    <div>
      <Contact />
    </div>
  );
};

export default contact;
