import React from "react";
import Image from "next/image";

const DroneForAnimalHusbandry = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>
          Design and Operation of a Drone suitable for the Operations of Animal
          Husbandry Industry
        </h2>
        <Image
          src="/research/21_22/drone_animal_husbandry/drone_cad.jpeg"
          height="500px"
          width="500px"
        />
        <Image
          src="/research/21_22/drone_animal_husbandry/drone_flow_simulation.jpeg"
          height="500px"
          width="500px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        This project is being carried by Team Scalar (a team of Junior
        Researchers at SIME) led by Shashank. In its initial stage it deals with
        design and operation of a drone suitable for the operations of animal
        husbandry industry. It will be equipped with solar power to get extra
        energy during its operation, and will pass through a series of
        iterations before finally saturating the design. Performance of
        propeller was checked by performing CFD analysis, Further structural
        analysis of components will be performed to validate calculations of
        forces and dimensions along with drop test and CFD for frame and design
        changes will be made accordingly, Finally simulation of electric circuit
        and sensors will be done to make a fully functional model of drone.
      </p>
    </div>
  );
};

export default DroneForAnimalHusbandry;
