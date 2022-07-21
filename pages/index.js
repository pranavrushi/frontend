import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";

export default function Home({ setCurrPage }) {
  useEffect(() => {
    setCurrPage("home");
  }, []);
  return <div className={styles.container}>Hello this is index page.</div>;
}
