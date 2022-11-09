import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BranchCard } from "../components";

function Offices() {
  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <h3 className="common-heading">Our shops</h3>
            <h5>
              <span className="primary-text">CD. MX.</span>{" "}
              <span className="secondary-text">
                MONTERREY GUADALAJARA QUERETARO TORREÓN ZAPOPAN TLAQUEPAQUE
                VERACRUZ CHIHUAHUA DURANGO LOS CABOS MAZATLAN VALLARTA CANCUN
                MERIDA PUEBLA
              </span>
            </h5>
          </div>
          <Row className="mb-5 pb-5 gy-4">
            <Col xl={3} lg={6} md={6}>
              <BranchCard
                title={"Insurgentes"}
                address={
                  "Av. Insurgentes Sur 253, Roma Nte., Cuauhtémoc, 06700 Mexico City, CDMX"
                }
              />
            </Col>
            <Col xl={3} lg={6} md={6}>
              <BranchCard
                title={"Roma"}
                address={
                  "Av. Insurgentes Sur 253, Roma Nte., Cuauhtémoc, 06700 Mexico City, CDMX"
                }
              />
            </Col>
            <Col xl={3} lg={6} md={6}>
              <BranchCard
                title={"Polanco"}
                address={
                  "C. Lake Zurich 245 Local B-02-A, Amp Granada, 11529 Mexico City, CDMX"
                }
              />
            </Col>
            <Col xl={3} lg={6} md={6}>
              <BranchCard
                title={"Santa Fe"}
                address={
                  "Vasco de Quiroga 1226 C, Cuevitas, Álvaro Obregón, 01209 Mexico City, CDMX"
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Offices;
