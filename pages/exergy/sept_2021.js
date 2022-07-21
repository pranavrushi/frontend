import React, { useEffect } from "react";

const Sept_2021 = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("exergy");
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          padding: "2rem 0",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3em" }}>Exergy September 2021</h1>
      </div>

      <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/84c1252cb1.html"
        style={{
          border: "1px solid lightgray",
          width: "90%",
          height: "100%",
          minHeight: "500px",
        }}
      ></iframe>
    </div>
  );
};

export default Sept_2021;
