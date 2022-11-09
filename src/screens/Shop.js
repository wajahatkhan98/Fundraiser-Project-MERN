import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { ShopCard } from "../components";
function Shop() {
  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <h3 className="common-heading">Shop</h3>
          </div>
          <Row className="mb-5">
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
            <Col lg={3} md={6}>
              <ShopCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Shop;
