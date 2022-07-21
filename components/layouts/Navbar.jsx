import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layouts/Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";

function CollapsibleExample({ currPage }) {
  return (
    <Navbar
      sticky-top="true"
      collapseOnSelect
      expand="lg"
      className={`${styles.bg_teal} sticky-top ${styles.navbar_text}`}
      variant="dark"
    >
      <Container>
        <Link href="/">
          <a>
            <Image src="/SIME.png" width="90px" height="90px" alt="sime_logo" />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto mx-auto">
            <Link href="/">
              <li className="nav-item ">
                <a
                  className={`nav-link  ${currPage == "home" ? "active" : ""} ${
                    styles.myLink
                  }`}
                >
                  Home
                </a>
              </li>
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SOCIAL MEDIA
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  className="dropdown-item"
                  href="https://www.youtube.com/channel/UCAaEV7A5_aasDHtcoeupSJg/featured"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.facebook.com/sime.bitmesra"
                  target="_blank"
                >
                  FACEBOOK
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.instagram.com/sime.bitmesra/"
                  target="_blank"
                >
                  INSTAGRAM
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/company/sime-bitmesra"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Team
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./core.html">
                  Core
                </a>
                <a className="dropdown-item" href="./rp.html">
                  Research proceeding
                </a>
                <a className="dropdown-item" href="./OPM.html">
                  Operations and Management
                </a>
                <a className="dropdown-item" href="./iar.html">
                  Industry and alumni relations
                </a>
                <a className="dropdown-item" href="./events.html">
                  Events
                </a>
                <a className="dropdown-item" href="./workshop.html">
                  Workshops
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Exergy
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./exergy_sept21.html">
                  September 2021
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://medium.com/spark-by-sime"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPARK
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="./eventspage.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Events
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Research
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./21-22season.html">
                  2021-2022 Season
                </a>
                <a className="dropdown-item" href="./20-21season.html">
                  2020-2021 Season
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a
                  className={`nav-link ${
                    currPage == "contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
