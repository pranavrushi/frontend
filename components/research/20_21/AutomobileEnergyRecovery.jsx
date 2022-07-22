import React from "react";
import Image from "next/image";

const AutomobileEnergyRecovery = () => {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Groundbreaking Innovation in Automobile Energy Recovery System</h2>
        <Image
          src="/research/20_21/automobile.jpg"
          height="600px"
          width="900px"
        />
      </div>

      <p style={{ fontSize: "18px" }}>
        This project was led by Ishan Kashyap - a senior researcher at the
        society. The project is regarding the recovery and utilization of waste
        heat energy from an IC Engine equipped Automobile. About 60% of total
        energy of fuel is lost in form of heat and the project aims to create an
        effective system which can recover almost 50%-60% of that lost heat
        energy and store it in form of electrical energy in batteries which can
        be used to power other systems such as AC, lights etc, this method when
        merged with Kinetic energy recovery system can be utilized in Hybrid
        Vehicles and could increase the range of a hybrid vehicle by almost 40%.
      </p>
      <h5 className="text-success">Project Achievement :</h5>

      <b className="text-primary">
        Published in Weentech Proceedings in Energy (2021), Page 11-23,
        International conference on Innovative Development and Engineering
        Applications
      </b>
    </div>
  );
};

export default AutomobileEnergyRecovery;
