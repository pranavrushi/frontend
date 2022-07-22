import React from "react";
import Image from "next/image";

const BitOPath = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>BIT-O-PATH</h2>
        <Image
          className="mx-2 my-3"
          src="/research/21_22/bit_o_path/path1.jpeg"
          height="480px"
          width="720px"
        />
        <Image
          className="mx-2 my-3"
          src="/research/21_22/bit_o_path/path2.jpeg"
          height="480px"
          width="720px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        A project on food points and crowd prediction is done by the Team
        Vector. This project has two parts:- The first one, helps to know the
        nearest food point and the second one, helps to know the crowd at the
        food points as well as the availability of food items at appropriate
        prices. This project will help the students of BIT Mesra to explore the
        food points specifically the freshers who are new to the vast campus of
        BIT Mesra. This will not only save their time but also their money.
        Through the project, all the food points will come under one umbrella.
        With slight modification, the project can be used at the local and
        national levels. Contributors -{" "}
        <b>
          Abhishek Pandey, Aditya Raj Choudhary, Anuj Agrawal , Krishna Kumar
          Singh Garia
        </b>
      </p>
      <p className="my-2">
        Website link:{" "}
        <a href="http://bitfoodpoint.xyz/" target="_blank">
          BIT-O-PATH
        </a>
      </p>
    </div>
  );
};

export default BitOPath;
