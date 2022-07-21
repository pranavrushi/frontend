import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const CoviKnowApp = () => {
  const router = useRouter();
  const downloadCoviKnow = () => {
    router.push("/research/21_22/covin_know_app/CoviKnow.apk");
  };
  return (
    <div>
      <h2 style={{ textTransform: "none", textAlign: "center" }}>
        CoviKnow App
      </h2>
      <div className="text-center my-3">
        <Image
          src="/research/21_22/covin_know_app/playstore.png"
          height="300px"
          width="250px"
          alt="coviknow.jpg"
        />
        <br />
        <button
          className="btn btn-primary my-3"
          onClick={() => {
            downloadCoviKnow();
          }}
        >
          Download
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="/research/21_22/covin_know_app/c1.jpeg"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-3">
            <img
              src="/research/21_22/covin_know_app/c2.jpeg"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-3">
            <img
              src="/research/21_22/covin_know_app/c3.jpeg"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-3">
            <img
              src="/research/21_22/covin_know_app/c4.jpeg"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <p style={{ fontSize: "18px" }}>
          This project was led by Srijan Jha - a Junior researcher at the
          Society for Industrial Management and Engineering. The topic of the
          project is 'DEVELOPMENT OF A MOBILE DRUG RECOMMENDER SYSTEM FOR
          COVID-19'. The primary aim of the project is to develop an android
          application that would assist a patient in getting drug prescriptions
          based on what symptoms the patient is suffering from COVID-19.
          Recommender systems are among the many solutions used to obtain valid
          information. When searching for an item, users obtain a list of
          recommended results that may match their preferences. Several
          recommender systems for healthcare have been developed, the challenges
          recorded so far are that most of them are web-based. This project
          focuses on the design and development of a mobile recommender system
          for COVID-19. The main objective of this project was to design a
          mobile application system for patients that will be able to suggest or
          recommend drugs based on a listed symptom and to design a recommender
          algorithm that uses evolving rules using collaborative filtering
          modeling technique.
        </p>

        <br />
      </div>
    </div>
  );
};

export default CoviKnowApp;
