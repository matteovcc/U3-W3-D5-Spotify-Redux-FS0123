/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import Next from "../playerbuttons/Next.png";
import Play from "../playerbuttons/Play.png";
import Previous from "../playerbuttons/Previous.png";
import Repeat from "../playerbuttons/Repeat.png";
import Shuffle from "../playerbuttons/Shuffle.png";
const MyFooter = () => {
  return (
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
  );
};

export default MyFooter;
