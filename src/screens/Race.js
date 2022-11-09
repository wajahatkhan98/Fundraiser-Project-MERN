import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { ShopCard } from "../components";
import { RaceImage } from "../components/Images";
function Race() {
  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <h3 className="common-heading">Join our team</h3>
          </div>
          <Row className="mb-5 gy-5">
            <Col lg={6}>
              <Fade bottom>
                <div className="text-center">
                  <img src={RaceImage} className="team-img" />
                </div>
              </Fade>
            </Col>
            <Col lg={6}>
              <Fade bottom>
                <div className="race-item">
                  <Link to={"#"}>SENIOR BARISTA</Link>
                  <p>CD MX</p>
                </div>
                <div className="race-item">
                  <Link to={"#"}>REGIONAL MANAGER</Link>
                  <p>CD MX</p>
                </div>
                <div className="race-item">
                  <Link to={"#"}>LOGISTICS COORDINATOR, JTC CEDIS</Link>
                  <p>Torreon, Coah .</p>
                </div>
                <div className="race-item">
                  <Link to={"#"}>MARKETING COORDINATOR</Link>
                  <p>Chihuahua, Ch.</p>
                </div>
                <div className="race-item">
                  <Link to={"#"}>BARISTA JR</Link>
                  <p>Veracruz ,</p>
                </div>
                <div className="race-item">
                  <Link to={"#"}>BARISTA JR</Link>
                  <p>Cancun, QR</p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Race;
