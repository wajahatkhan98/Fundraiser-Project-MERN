import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Banner,
  Second,
  CardOne,
  CardTwo,
  CardThree,
  Background,
  Bolsa,
  TONINHO,
  Coffee,
} from "../components/Images";
import { Zoom, Fade, Slide, Bounce, LightSpeed } from "react-reveal";
function Home() {
  return (
    <>
      <Zoom ssrFadeout>
        <div className="banner-section">
          <div className="banner-inner">
            <Fade top big cascade>
              {" "}
              <h1 className="banner-text absolute-text home-banner">
                Coffee to the max
              </h1>{" "}
            </Fade>
          </div>
        </div>
      </Zoom>
      <section>
        <div className="text-center">
          {/* <Slide left big> */}
          <LightSpeed left>
            <img src={Second} />
          </LightSpeed>
          {/* </Slide> */}
          <h3 className="common-heading">ENJOY OUR MENU</h3>
        </div>
        <Container>
          <Row>
            <Col lg={4} sm={12} md={4}>
              <Fade bottom>
                <article className="custom-card">
                  <img src={CardOne} />
                  <h3>CHOCOCRUM</h3>
                </article>
              </Fade>
            </Col>
            <Col lg={4} sm={12} md={4}>
              <Fade bottom big>
                <article className="custom-card">
                  <div className="position-relative">
                    <img src={CardTwo} />
                    <div className="tag">
                      <div className="position-relative">
                        <span>NEW!</span>
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          data-bbox="60.787 56.795 478.427 478.412"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="60.787 56.795 478.427 478.412"
                          role="presentation"
                          aria-hidden="true"
                        >
                          <g>
                            <path d="M534.135 345.155l-24.656 17.296 10.172 28.349-26.547 11.579 4.394 28.633-29.395 6.545-1.449 30.087-28.96.54-6.894 28.134-29.666-5.202-12.843 27.221-26.961-10.58-17.134 23.351-25.414-16.151-22.291 20.25-20.861-20.097-24.766 15.023-17.304-24.661-28.351 10.182-11.583-26.553-28.629 4.403-6.547-29.396-30.083-1.45-.539-28.957-28.136-6.896 5.202-29.662-27.247-12.849 10.586-26.966-23.358-17.133 16.162-25.419-20.25-22.298 20.1-20.856-15.022-24.772 24.655-17.293-10.18-28.339 26.554-11.582-4.405-28.631 29.396-6.545 1.444-30.09 28.962-.537 6.892-28.139 29.672 5.205 12.853-27.238 26.958 10.582 17.137-23.353 25.415 16.156 22.294-20.251 20.861 20.098 24.767-15.022 17.299 24.656 28.348-10.172 11.582 26.546 28.629-4.396 6.547 29.389 30.079 1.446.541 28.96 28.133 6.892-5.2 29.67 27.246 12.853-10.582 26.964 23.352 17.132-16.155 25.418 20.255 22.298-20.102 20.86 15.023 24.768z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3>VEGAN SANDWICH</h3>
                </article>
              </Fade>
            </Col>
            <Col lg={4} sm={12} md={4}>
              <Fade bottom>
                <article className="custom-card">
                  <img src={CardThree} />
                  <h3>JAVA COOKIES</h3>
                </article>
              </Fade>
            </Col>
          </Row>
          <div className="text-center">
            <Link to={"#"} className="btn primary-btn">
              SEE MENU
            </Link>
          </div>
        </Container>
      </section>
      <section className="section">
        <div className="section2">
          <img src={Background} className="section-background" />
          <Container>
            <div className="normal-padding text-center">
              <h3 className="common-heading text-white">
                BRING THE BEST COFFEE HOME
              </h3>
            </div>
            <Row>
              <Col lg={4} sm={12} md={4}>
                <Fade top>
                  <article className="custom-card-two">
                    <img src={Bolsa} />
                    <h3>
                      JTC™ HOUSE BLEND <br />
                      500 G.
                    </h3>
                  </article>
                </Fade>
              </Col>
              <Col lg={4} sm={12} md={4}>
                <Fade top>
                  <article className="custom-card-two">
                    <img src={Bolsa} />
                    <h3>
                      JTC™ HOUSE BLEND <br />
                      500 G.
                    </h3>
                  </article>
                </Fade>
              </Col>
              <Col lg={4} sm={12} md={4}>
                <Fade top>
                  <article className="custom-card-two">
                    <img src={Bolsa} />
                    <h3>
                      JTC™ HOUSE BLEND <br />
                      500 G.
                    </h3>
                  </article>
                </Fade>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <Link to={"#"} className="btn primary-btn">
                SEE MORE
              </Link>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container fluid>
          <Row className="col-without-padding">
            <Col lg={6} md={6}>
              <div className="card-lg">
                <h3 className="card-title">Java Times Cafe</h3>
                <h4 className="secondary-text">
                  A dream made for everyone to enjoy
                </h4>
                <p>
                  In Mexico it saw its beginnings in 1999 in the city of Torreón
                  Coahuila as a coffee roasting company and distributor of
                  supplies and equipment for the industry, with coverage for the
                  entire Mexican Republic, always with the support of sister
                  companies in the United States. At the end of the same year,
                  the first Java Times Caffé coffee shop opened, located in the
                  Galerías Laguna shopping center in the city of Torreón.
                </p>
                <Link to={"#"} className="btn primary-btn">
                  SEE MORE
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <Zoom right>
                <img src={TONINHO} className="team-img-1" />
              </Zoom>
            </Col>
            <Col lg={6} md={6}>
              <Zoom right>
                <div className="position-relative h-100">
                  <img src={Coffee} className="w-100 team-img-2" />
                </div>
              </Zoom>
            </Col>
            <Col lg={6} md={6}>
              <div className="card-lg">
                <h3 className="card-title">Javaccino</h3>
                <h4 className="secondary-text">the essence of our flavor</h4>
                <p>
                  Paragraph. Click here to add your own text and edit. It is
                  easy. Click Edit Text or double click here to add your content
                  and change the font. You can drag and drop this text wherever
                  you want on your page. Here you can tell your story and let
                  your users know more about you.
                </p>
                <Link to={"#"} className="btn primary-btn">
                  PURCHASE
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="ImageBackgroundWrap Background-fixed">
        <div className="ImageInnerWrap">
          <div class="background-text">
            <div className="bottom-div">
              <Fade bottom big cascade>
                {" "}
                <h2 className="banner-text">CONTENT HEADING HERE</h2>
              </Fade>
              <p>
                Enjoy the best coffee, the richest pastries, the most delicious
                sandwiches <br />
                with the unique and original flavor of our house.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
