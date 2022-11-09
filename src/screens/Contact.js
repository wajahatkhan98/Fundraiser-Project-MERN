import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ShopCard } from "../components";
import { CardOne, RaceImage } from "../components/Images";
import { Flip, Bounce } from "react-reveal";
function Contact() {
  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <Bounce bottom cascade>
              <h3 className="common-heading">Contact Us</h3>
            </Bounce>
          </div>
          <Row className="mb-5">
            <Col lg={6}>
              <h3 className="form-heading text-center">
                We want to be in contact with you.
              </h3>
              <form className="contact-form">
                <input className="form-control" placeholder="Name" />
                <input className="form-control" placeholder="E-Mail" />
                <textarea
                  className="form-control"
                  placeholder="Write your message here..."
                  rows={6}
                ></textarea>
              </form>
            </Col>
            <Col lg={6}>
              <Flip right>
                <div className="text-center">
                  <img src={CardOne} className="contact-image" />
                </div>
              </Flip>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
