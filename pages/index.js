import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Carousel from "../components/mainPage/Carousel";

export default function Home({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("home");
  }, []);
  return (
    <div>
      <Carousel />
    </div>
  );
}
