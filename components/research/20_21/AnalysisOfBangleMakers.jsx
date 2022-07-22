import React from "react";
import Image from "next/image";

const AnalysisOfBangleMakers = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Problem of Vegetable Sellers and Bangle Makers Solved!</h2>
        <Image
          src="/research/20_21/bangle_makers.jpg"
          height="600px"
          width="900px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        This product design and prototyping project was led by the senior
        researcher Utkarsh. He has designed an Ergonomic Ground Chair to solve
        the problem of small scale industry workers who spend most of their work
        hours sitting on ground without any structural support to their back.
        The problem was identified and a very innovative design of ground chair
        was developed that is economical, space efficient, mechanically stiff
        and most importantly ergonomic. The product has been designed to support
        a wide range of user anthropometry and software as well as paper
        analysis has been properly carried out. As the name suggests, the chair
        can be put on the ground and can be reclined as desired by the user.
        There is a provision of adjusting the recline by using the easily
        operable slot system on the lower frame. The product is still in it’s
        pre-prototyping phase and will be manufactured once the COVID situation
        settles down.
      </p>
      <h5 className="text-success">Project Achievement :</h5>

      <b className="text-primary">
        Awarded second prize in Institute Innovation Contest 2020 that was
        organized by Institute Innovation Council (a Ministry of Education, GoI
        Initiative), BIT Mesra.
      </b>
    </div>
  );
};

export default AnalysisOfBangleMakers;
