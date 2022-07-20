import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/layouts/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <title> SIME-BIT Mesra</title>
        <link rel="icon" href="/SIME.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
