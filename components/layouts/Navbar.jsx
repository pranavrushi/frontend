import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layouts/Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
        <Navbar.Collapse>
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
            <NavDropdown title="Social Media">
              <NavDropdown.Item
                href="https://www.facebook.com/sime.bitmesra"
                target="_blank"
              >
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/sime.bitmesra/"
                target="_blank"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/company/sime-bitmesra"
                target="_blank"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.youtube.com/channel/UCAaEV7A5_aasDHtcoeupSJg/featured"
                target="_blank"
              >
                YouTube
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Our Team"
              active={currPage == "ourTeam" ? "yes" : ""}
            >
              <Link href="/our_team/core" passHref>
                <NavDropdown.Item>Core</NavDropdown.Item>
              </Link>
              <Link href="/our_team/research_proceeding" passHref>
                <NavDropdown.Item>Research proceeding</NavDropdown.Item>
              </Link>
              <Link href="/our_team/operations_and_management" passHref>
                <NavDropdown.Item>Operations and Management</NavDropdown.Item>
              </Link>
              <Link href="/our_team/industry_and_alumni_relations" passHref>
                <NavDropdown.Item>
                  Industry and alumni relations
                </NavDropdown.Item>
              </Link>
              <Link href="/our_team/events" passHref>
                <NavDropdown.Item>Events</NavDropdown.Item>
              </Link>
              <Link href="/our_team/workshops" passHref>
                <NavDropdown.Item>Workshops</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown
              title="Exergy"
              active={currPage == "exergy" ? "yes" : ""}
            >
              <Link href="/exergy/sept_2021" passHref>
                <NavDropdown.Item>September 2021</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://medium.com/spark-by-sime"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spark
              </a>
            </li>
            <Link href="/events">
              <li className="nav-item ">
                <a
                  className={`nav-link  ${
                    currPage == "events" ? "active" : ""
                  } ${styles.myLink}`}
                >
                  Our-Events
                </a>
              </li>
            </Link>
            <NavDropdown
              title="Research"
              active={currPage == "research" ? "yes" : ""}
            >
              <Link href="/research/season_2021_2022" passHref>
                <NavDropdown.Item>2021-2022 Season</NavDropdown.Item>
              </Link>
              <Link href="/research/season_2020_2021" passHref>
                <NavDropdown.Item>2020-2021 Season</NavDropdown.Item>
              </Link>
            </NavDropdown>

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
