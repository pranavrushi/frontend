import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className={`${styles.bg_teal} ${styles.myFooter}`}>
      <div className="container-fluid padding footer-section">
        <div className="row text-center padding justify-content-center">
          <div className="col-lg-5">
            <Image
              className="sime-logo-footer"
              src="/SIME.png"
              alt="sime-footer.png"
              height="100px"
              width="100px"
            />
            <hr style={{ width: "30%", margin: "auto" }} className="my-3" />
            <p>
              SIME- BIT, Mesra promises to fulfill its motto of creating an
              ecosystem for the development of undergraduate to make them fit
              for industries.
            </p>
            <br />

            <h5>Innovate, Inculcate and Inspire</h5>
          </div>
          <div className="col-lg-4 my-5 contact-us">
            <h2>Contact Us</h2>
            <hr style={{ width: "50%", margin: "auto" }} className="my-3"></hr>
            <p>
              Birla Institute of Technology, Mesra
              <br />
              Ranchi, Jharkhand <br />
              India- 835215 <br />
            </p>
            <a
              className={styles.footer_section_mail}
              href="mailto:sime@bitmesra.ac.in"
            >
              <b>Email</b>-<br /> sime@bitmesra.ac.in
            </a>
            <br />
            <div className="my-2">
              <SocialIcon
                className="mx-1"
                url="http://www.facebook.com/sime.bitmesra"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
                target="_blank"
              />
              <SocialIcon
                className="mx-1"
                url="http://www.linkedin.com/company/sime-bitmesra"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
                target="_blank"
              />
              <SocialIcon
                className="mx-1"
                url="http://www.instagram.com/sime.bitmesra"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
                target="_blank"
              />
              <SocialIcon
                className="mx-1"
                url="https://www.youtube.com/channel/UCAaEV7A5_aasDHtcoeupSJg"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright ©2021 All Rights Reserved | SIME
        </div>
      </div>
    </footer>
  );
};

export default Footer;
