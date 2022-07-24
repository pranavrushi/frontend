import React, { useEffect } from "react";

const operations_and_management = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("ourTeam");
  }, []);

  return (
    <div className="text-center justify-content-center my-4">
      <p style={{ color: " #0e918c", fontSize: "29px" }}>
        Operations and management team
      </p>
      <hr style={{ width: "200px", margin: "auto" }} />
      <br />
    </div>
  );
};

export default operations_and_management;
