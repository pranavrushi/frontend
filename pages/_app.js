import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <title> SIME-BIT Mesra</title>
        <link rel="icon" href="/SIME.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
