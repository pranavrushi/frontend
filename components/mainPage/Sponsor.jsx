import React from "react";
import Image from "next/image";

const Sponsor = () => {
  return (
    <div
      className="sponsor my-4"
      style={{ textAlign: "center", color: "rgb(14, 145, 140)" }}
    >
      <h1>Our Research Sponsor</h1>
      <br />
      <a href="https://www.solidworks.com/" target="_blank">
        <Image
          src="/mainPage/solidworks.png"
          height="224px"
          width="481px"
          alt="solidworks"
        />
      </a>
    </div>
  );
};

export default Sponsor;
