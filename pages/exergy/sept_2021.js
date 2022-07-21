import React, { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

const Sept_2021 = ({ setCurrPage }) => {
  useEffect(() => {
    setCurrPage("exergy");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 0",
        display: "grid",
        placeItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3em", textAlign: "center" }}>
        Exergy September 2021
      </h1>

      <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        src="https://heyzine.com/flip-book/84c1252cb1.html"
        style={{
          border: "1px solid lightgray",
          width: "90vw",
          height: "80vh",
          minHeight: "500px",
        }}
      ></iframe>
    </div>
  );
};

export default Sept_2021;
