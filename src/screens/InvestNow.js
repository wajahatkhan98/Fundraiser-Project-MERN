import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import {EntityModal, InvestCard} from "../components";
function InvestNow() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState);

  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <h3 className="common-heading">Invest Now</h3>
          </div>
          <EntityModal status={showModal} toggleModal={toggleModal}/>
          <Row className="mb-5 gy-4">
           {Array(4)
              .fill(0)
              .map((_, index) => (
                <Col lg={4} md={6} key={index}>
                  {" "}
                  <InvestCard onClick={toggleModal} />{" "}
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default InvestNow;
