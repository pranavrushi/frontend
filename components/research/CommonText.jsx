import React, { useEffect } from "react";

const CommonText = ({ setCurrPage, year }) => {
  useEffect(() => {
    setCurrPage("research");
  }, []);

  return (
    <div className="my-4">
      <h1
        style={{
          textTransform: "none",
          color: "rgb(14, 145, 140)",
          textAlign: "center",
        }}
      >
        SIME Lab Tales
      </h1>

      <h5
        style={{
          textTransform: "none",
          textAlign: "left",
          margin: "30px",
          lineHeight: "30px",
        }}
      >
        Research is the strong foundation upon which every successful academic
        institution is built. Here at SIME under the guidance of esteemed
        faculty members and professors with an avid group of students we are
        always working and looking to widen and deepen our interests and
        knowledge. Here are the Research Projects for {year}. <br />
      </h5>
    </div>
  );
};

export default CommonText;
