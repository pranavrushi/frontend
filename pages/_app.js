import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const [currPage, setCurrPage] = useState("home");
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SSRProvider>
      <Head>
        <title> SIME-BIT Mesra</title>
        <link rel="icon" href="/SIME.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar currPage={currPage} />
      <Component {...pageProps} setCurrPage={setCurrPage} />
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
    </SSRProvider>
  );
}

export default MyApp;
