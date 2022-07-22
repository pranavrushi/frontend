import React, { useEffect } from "react";

const operations_and_management = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return <div>operations_and_management</div>;
};

export default operations_and_management;
