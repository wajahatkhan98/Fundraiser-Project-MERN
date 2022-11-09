import React, { useState } from "react";
import { Row, Col, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Cafeteria,
  Copia,
  InvestmentBg,
  Background,
  CoffeCup,
  CoffeCupDouble,
  ShareTable1,
  ShareTable2,
  ShareTable3,
  ShareTable4,
  ShareTableBg2,
  DocumentationBg,
} from "../components/Images";
import CountUp from "react-countup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Zoom, Fade, Slide, Bounce, LightSpeed } from "react-reveal";
function Investment() {
  const [search, setSearch] = useState(10);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <section id="investements">
        <Container>
          <div className="investment-section">
            <div className="content">
              <h1 className="banner-text">
                INVEST IN OUR NEW <br /> COFFE SHOPS
              </h1>
            </div>
            <div className="investments-card">
              <Row>
                <Col lg={3} sm={6}>
                  <h2>
                    <CountUp delay={1} end={100} />+
                  </h2>
                  <h4>Total investments</h4>
                </Col>
                <Col lg={3} sm={6}>
                  {" "}
                  <h2>
                    <CountUp delay={1} end={43} />
                  </h2>
                  <h4>Shares Left</h4>
                </Col>
                <Col lg={3} sm={6}>
                  {" "}
                  <h2>
                    <CountUp delay={1} end={143} />
                  </h2>
                  <h4>Total Share</h4>
                </Col>
                <Col lg={3} sm={6}>
                  {" "}
                  <h2>
                    {" "}
                    <CountUp delay={1} end={30000} /> $
                  </h2>
                  <h4>Share Price</h4>
                </Col>
              </Row>
            </div>
            {/* <img src={Cafeteria} />
            <p>
              Invest and be part of our new cafeterias, put your money
              <br />
              to work and start shaping your dreams.
            </p> */}
          </div>
        </Container>
      </section>

  {/* ==========================new-section-investment-simulation=========== */}
      <section className="invest-second" id="investment-simulation">
        <Container>
          <div className="investment-second text-center">
            <h3>Investment simulation: </h3>
            <h2>1000 SHARES</h2>
          </div>
          <Row width={70}>
            <Col lg={12} md={12}>
              <div className="bg-image">
                <div className="content d-flex justify-content-around text-white align-items-center">
                  <h3>
                    STARTUP VALUATION <br /> OF THE PROJECT
                  </h3>
                  <h3>
                    ESTIMATED VALUATION <br />
                    AT 5 YEARS OF THE PROJECT
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <div className="content text-center investment-second">
                <p>Par value of the share</p>
                <h2>
                  <CountUp
                    duration={5}
                    enableScrollSpy={true}
                    delay={2}
                    end={20}
                    prefix="$"
                    suffix=".00"
                  />
                  <span className="symbol-text">MXN</span>
                </h2>
              </div>
              <div className="content text-center mt-5 investment-second">
                <p>Par value of the share</p>
                <h2>
                  <CountUp
                    duration={5}
                    enableScrollSpy={true}
                    delay={2}
                    end={2000}
                    prefix="$"
                    suffix=".00"
                  />

                  <span className="symbol-text">MXN</span>
                </h2>
              </div>
            </Col>
            <Col lg={4}>
              <div className="image d-flex justify-content-center">
                <img src={CoffeCupDouble} alt="coffee cup" />
              </div>
            </Col>
            <Col lg={4} className="d-flex flex-column justify-content-center">
              <div className="content text-center investment-second">
                <p>Par value of the share</p>
                <h2>
                  <CountUp
                    duration={5}
                    enableScrollSpy={true}
                    delay={1}
                    end={114}
                    prefix="$"
                    suffix=".00"
                  />
                  <span className="symbol-text">MXN</span>
                </h2>
              </div>
              <div className="content text-center mt-5 investment-second">
                <p>Par value of the share</p>
                <h2>
                  <CountUp
                    duration={5}
                    enableScrollSpy={true}
                    delay={1}
                    end={878}
                    prefix="$"
                    suffix=".00"
                  />
                  <span className="symbol-text">MXN</span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==========================new-sections=========== */}
      <section className="section">
        <div className="section2">
          <img src={Background} className="section-background" />
          <Container>
            <div className="normal-padding text-center">
              <h3 className="common-heading text-white">JAVA TIMES CAFFE</h3>
            </div>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <Fade top>
                  <div className="content text-center text-white">
                    <p>
                      AS PART OF THE EXPANSION PROJECT THROUGHOUT MEXICO, IT HAS
                      PLACED
                    </p>
                    <h1 className="banner-text"> $120,000,000</h1>
                    <h2>-Available Actions-</h2>
                  </div>
                  <div className="img text-center">
                    <img src={CoffeCup} alt="java times coffe cup" />
                  </div>
                </Fade>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <Link to={"/invest-now"} className="btn primary-btn">
                Invest Now
              </Link>
            </div>
          </Container>
        </div>
      </section>
      {/* ==========================section-bg-attached=========== */}
      <section id="section-bg-atteched">
        <div className="ImageBackgroundWrap Background-fixed">
          <Container>
            <div className="ImageInnerWrap">
              <div class="background-text table-images-txt">
                <Fade top big cascade>
                  {" "}
                  <h3 className="common-heading text-white">
                    This simulation shows you the return that an investment of
                    $500,000.00 can have from the first to the fifth year of the
                    project
                  </h3>
                </Fade>
                <div className="images">
                  {/* <img src={ShareTableBg2} /> */}
                  <img src={ShareTable1} alt="price table" className="mt-4" />
                  <img src={ShareTable2} alt="price table" className="mt-4" />
                  <img src={ShareTable3} alt="price table" className="mt-4" />
                  <img src={ShareTable4} alt="price table" className="mt-4" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* =============================section-deposit========================= */}
      <section className="section mt-0">
        <div className="section2">
          <img src={Background} className="section-background" />
          <Container>
            <div className="normal-padding text-center">
              <h3 className="common-heading text-white">Deposit process</h3>
            </div>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <Fade top>
                  <div className="content text-center text-white">
                    <p>
                      If you have already decided the amount or number of shares
                      you want, please deposit the amount you want to invest to
                      the following account:
                    </p>
                    <h2>Bancomer</h2>
                    <h2>Startup Network Sapi CV </h2>
                    <p>
                      Account number: <h2> 00740251160114056833</h2>
                    </p>
                    <p>
                      Interbank code:
                      <h2>012060001140568332</h2>
                    </p>
                  </div>
                </Fade>
              </Col>
              <Col lg={12}>
                <div className="content text-center text-white mt-3">
                  <a href="mailto:123@gmail.com" className="btn primary-btn">
                    Send Deposit Ticket
                  </a>

                  <p className="mt-5">
                    In case you have any questions about the deposit process{" "}
                    <br /> We can gladly help you solve it.
                  </p>
                  <a
                    href="https://wa.me/123456789"
                    target="_blank"
                    className="btn primary-btn"
                  >
                    Check On Whatsapp
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ==============================section-documentation-process==================== */}

      <section className="section section-documentation mt-0">
        <div className="section2 py-5">
          <img src={DocumentationBg} className="section-background" />
          <Container>
            <div className="text-center">
              <h3 className="common-heading ">Documentation process</h3>
            </div>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <Fade top>
                  <div className="content text-center ">
                    <p>THE INVESTOR must meet the following requirements:</p>
                    <h4>PHYSICAL PERSON</h4>

                    <p>
                      - Letter of declaration of lawful origin of the Money.
                    </p>
                    <p>
                      - Contract signed by both parties for the purchase and
                      sale of Shares.
                    </p>
                    <p>-Copy of the INE, passport or professional ID.</p>
                    <p>-Proof of address.</p>
                    <p>-Being over 18 years.</p>
                    <p>-Copy of birth certificate.</p>
                  </div>
                </Fade>
              </Col>
              <Col lg={12}>
                <div className="content text-center  mt-3">
                  <a href="mailto:123@gmail.com" className="btn primary-btn">
                    Send Documentation
                  </a>

                  <p className="mt-5">
                    In case you have any questions about the deposit process{" "}
                    <br /> We can gladly help you solve it.
                  </p>
                  <a
                    href="https://wa.me/123456789"
                    target="_blank"
                    className="btn primary-btn"
                  >
                    Check On Whatsapp
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>


      <section className="invest-second py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <h2 className="secondary-text">STATES:</h2>
              <ul className="state-ul">
                <li>
                  <Link to={"/invest-now"}>AGUASCALIENTES</Link>
                </li>
                <li>
                  <Link to={"#"}>BAJA CALIFORNIA</Link>
                </li>
                <li>
                  <Link to={"#"}>BAJA CALIFORNIA</Link>
                </li>
                <li>
                  <Link to={"#"}>SOUTH</Link>
                </li>
                <li>
                  <Link to={"#"}>CAMPECHE</Link>
                </li>
                <li>
                  <Link to={"#"}>CHIAPAS</Link>
                </li>
                <li>
                  <Link to={"#"}>CHIHUAHUA</Link>
                </li>
                <li>
                  <Link to={"#"}>MEXICO CITY</Link>
                </li>
                <li>
                  <Link to={"#"}>COAHUILA</Link>
                </li>
                <li>
                  <Link to={"#"}>COLIMA</Link>
                </li>
                <li>
                  <Link to={"#"}>DURANGO</Link>
                </li>
                <li>
                  <Link to={"#"}>EDO. OF MEXICO</Link>
                </li>
                <li>
                  <Link to={"#"}>GUANAJUATO</Link>
                </li>
                <li>
                  <Link to={"#"}>GUERRERO</Link>
                </li>
                <li>
                  <Link to={"#"}>HIDALGO</Link>
                </li>
                <li>
                  <Link to={"#"}>JALISCO</Link>
                </li>
                <li>
                  <Link to={"#"}>MICHOACÁN</Link>
                </li>
                <li>
                  <Link to={"#"}>MORELOS</Link>
                </li>
                <li>
                  <Link to={"#"}>NAYARIT</Link>
                </li>
                <li>
                  <Link to={"#"}>NUEVO LE`ÓN</Link>
                </li>
                <li>
                  <Link to={"#"}>OAXACA</Link>
                </li>
                <li>
                  <Link to={"#"}>PUEBLA</Link>
                </li>
                <li>
                  <Link to={"#"}>QUERETARO</Link>
                </li>
              </ul>
            </Col>
            <Col lg={9}>
              <Row>
                <Col md={12}>
                  <div className="main-search d-flex">
                    {" "}
                    <div className="invest-search-input">
                      <input type="text" placeholder="Search here" />{" "}
                    </div>
                    <div className="invest-drop-down">
                      <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">
                          Search By
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={search}
                          label="Search by"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>State</MenuItem>
                          <MenuItem value={20}>Postal Code</MenuItem>
                          <MenuItem value={30}>City</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div class="search-btn text-center">
                      <button class="btn primary-btn" href="/">
                        Search
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="investment-second">
                <h3>BE PART OF OUR COLLECTIVE INVESTMENT IN </h3>
                <h2>MEXICO</h2>
                <img src={Copia} />
                <p className="">
                  Lorem ipsum pain sit amet, consectetur adipiscing elit.
                  Maecenas pulvinar augue ut bibendum fringilla. Praesent
                  condimentum tempus lectus non blandit. Praesent porttitor in
                  erat eu euismod. Suspendisse eu tortor quis tellus auctor
                  molestie sit amet et urna. Curabitur volutpat vehicula arcu eu
                  molestie. Donec laoreet laoreet elit ac elementum. Suspendisse
                  laoreet lacinia suscipit. Fusce malesuada ligula quam, et
                  eleifend massa pharetra eget. In a nursery arch. Pellentesque
                  eu laoreet enim. Phasellus ac vehicula tellus, quis
                  pellentesque augue.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Investment;
