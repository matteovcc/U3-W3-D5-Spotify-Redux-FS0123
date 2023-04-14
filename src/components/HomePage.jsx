/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Col,
  Container,
  Nav,
  NavLink,
  NavbarBrand,
  Row,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../logo/Spotify_Logo.png";
import Next from "../playerbuttons/Next.png";
import Play from "../playerbuttons/Play.png";
import Previous from "../playerbuttons/Previous.png";
import Repeat from "../playerbuttons/Repeat.png";
import Shuffle from "../playerbuttons/Shuffle.png";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Nav
              className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
              id="sidebar"
            >
              <div className="nav-container">
                <NavbarBrand>
                  <img src={logo} alt="Spotify_Logo" width="131" height="40" />
                </NavbarBrand>
                <NavbarToggle
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </NavbarToggle>
                <NavbarCollapse id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <ul>
                      <li>
                        <NavLink href="index.html">
                          <i class="fas fa-home fa-lg"></i>&nbsp; Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink class="nav-item nav-link" href="#">
                          <i class="fas fa-book-open fa-lg"></i>&nbsp; Your
                          Library{" "}
                        </NavLink>
                      </li>
                      <li>
                        <div class="input-group mt-3">
                          <input
                            type="text"
                            class="form-control mb-2"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div class="input-group-append" className="mb-4">
                            <button
                              class="btn btn-outline-secondary btn-sm"
                              type="button"
                              id="button-addon1"
                              onClick="search()"
                            >
                              GO
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </NavbarCollapse>
              </div>
              <div class="nav-btn">
                <button class="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button class="btn login-btn" type="button">
                  Login
                </button>
                <NavLink href="#">Cookie Policy</NavLink> |
                <NavLink href="#"> Privacy</NavLink>
              </div>
            </Nav>
          </Col>

          {/* main */}
          <Col xs={12} md={9} className="offset-md-3">
            <Row>
              <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </Col>
            </Row>

            <Row>
              <Col xs={10}>
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* ENDMAIN */}
      {/* NAVBARFLEXBOTTOM */}
      <Container fluid className=" pt-1 bg-container" fixed="bottom">
        <Row>
          <Col lg={10} className="offset-lg-2">
            <Row>
              <Col
                xs={6}
                md={4}
                lg={2}
                className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
              >
                <Row id="row-controls">
                  <div id="row-controls">
                    <a href="#">
                      <img src={Shuffle} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={Previous} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={Play} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={Next} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={Repeat} alt="shuffle" />
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
