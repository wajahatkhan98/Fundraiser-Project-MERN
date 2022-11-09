import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SmosOne, SmosTwo } from "../components/Images";
import { Fade } from "react-reveal";
function WeAreJava() {
  return (
    <>
      <section>
        <Container fluid>
          <Row className="col-without-padding">
            <Col lg={6} className="about-card-order-1">
              <Fade left>
                <div className="position-relative">
                  <img src={SmosOne} className="card-lg-smos-img" />
                </div>
              </Fade>
            </Col>
            <Col lg={6} className="about-card-order-2">
              <Fade right>
                <div className="card-lg">
                  <h3 className="card-title">A FLAVOR DREAM COME TRUE</h3>
                  <p>
                    Java Times Caffé has its origins more than 15 years ago, as
                    an organization dedicated to serving the coffee industry in
                    the United States of America.
                    <br />
                    <br />
                    In Mexico it saw its beginnings in 1999 in the city of
                    Torreón Coahuila as a coffee roasting company and
                    distributor of supplies and equipment for the industry, with
                    coverage for the entire Mexican Republic, always with the
                    support of sister companies in the United States. At the end
                    of the same year, the first Java Times Caffé coffee shop
                    opened, located in the Galerías Laguna shopping center in
                    the city of Torreón.
                  </p>
                </div>
              </Fade>
            </Col>
            <Col lg={6} className="about-card-order-4">
              <Fade left>
                <div className="card-lg">
                  <h3 className="card-title">OUR MISSION</h3>

                  <p>
                    To be the leading franchise company in the specialty coffee
                    industry, providing the best quality products, the best
                    customer service, the best opportunities for our employees
                    and the best demonstration to one customer at a time.
                  </p>
                  <h3 className="card-title">OUR VALUES</h3>
                  <p>
                    Lorem Ipsum is simply a fictional text from the printing and
                    typesetting industry. Lorem Ipsum is simply a fictional text
                    from the printing and typesetting industry.
                  </p>
                </div>
              </Fade>
            </Col>
            <Col lg={6} className="about-card-order-3">
              <Fade right>
                <img src={SmosTwo} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WeAreJava;
