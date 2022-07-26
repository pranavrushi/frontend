import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Carousel from "../components/mainPage/Carousel";
import Sponsor from "../components/mainPage/Sponsor";
import AboutSection from "../components/mainPage/AboutSection";

export default function Home({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("home");
  }, []);
  return (
    <div>
      <Carousel />
      <AboutSection />
      <hr style={{marginLeft:"20%", marginRight:"20%"}} className="my-4"/>
      <Sponsor />
    </div>
  );
}
