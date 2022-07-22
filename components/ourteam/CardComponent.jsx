import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const CardComponent = ({name,position,linkedin,img}) => {
  return (
    <div
      className="row justify-content-center text-center"
      style={{
        border: "2px solid black",
        height: "350px",
        width: "300px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          margin: "auto",
        }}
      >
        <Image src={img} alt="user profile" layout="fill" />
      </div>

      <b>{name}</b>
      <div>{position}</div>
      <SocialIcon
        className="mx-1 my-2"
        url={linkedin}
        fgColor="#ffffff"
        style={{ height: 35, width: 35 }}
        target="_blank"
      />
    </div>
  );
};

export default CardComponent;
