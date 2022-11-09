import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "../components";
import {
  Amapola,
  Americano,
  Bagel,
  Fermantada,
  Intergel,
  Jala,
  Javaccino,
  Masa,
  MasaIntegral,
  Semillas,
  SmosOne,
  SmosTwo,
} from "../components/Images";
import { Zoom, Fade, Slide, Bounce, LightSpeed } from "react-reveal";
function Menu() {
  const [bedidas, setBedidas] = useState([
    {
      image: Americano,
      title: "CAFÉ AMERICANO",
      price: 38,
      description:
        "Nuestra mezcla de agua caliente y café procesado en máquina de expreso.",
    },
    {
      image: Javaccino,
      title: "JAVACCINO",
      price: 70,
      description: "Mezcla de café con nuestra base auténtica y leche frappé.",
    },
    {
      image: Bagel,
      title: "BAGEL CON SEMILLAS DE GIRASOL",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: Amapola,
      title: "BAGEL CON SEMILLAS DE AMAPOLA",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: Intergel,
      title: "BAGEL INTEGRAL",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: Semillas,
      title: "BAGEL INTEGRAL CON SEMILLAS",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
  ]);

  const [pan, setPan] = useState([
    {
      image: Fermantada,
      title: "DE MASA FERMENTADA",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: Masa,
      title: "DE MASA FERMENTADA INTEGRAL",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: MasaIntegral,
      title: "100% MASA FERMENTADA INTEGRAL",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
    {
      image: Jala,
      title: "PAN DE JALÁ",
      price: 9,
      description: "Elemento de tu menú. Describe brevemente tu elemento aquí.",
    },
  ]);
  return (
    <>
      <section>
        <Container>
          <div className="first-section-with-title">
            <h3 className="common-heading">Enjoy our MENU</h3>
          </div>
          <div className="heading-section-border">
            <h2>BEBIDAS</h2>
          </div>
          <p className="normal-text mt-3">
            Disfruta de nuestra mezcla de la casa, preparada en tu bebida
            preferida para ofrecerte una experiencia de sabor única.
          </p>
          <Row>
            {bedidas.map((item) => {
              return (
                <>
                  <Col lg={6}>
                    <Fade top>
                      <Card
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                      />
                    </Fade>
                  </Col>
                </>
              );
            })}
          </Row>
          <div className="heading-section-border mt-5">
            <h2>PAN</h2>
          </div>
          <p className="normal-text mt-3">
            Sección de tu menú. Haz una descripción breve de tu sección aquí.
          </p>

          <Row className="mb-5 pb-5">
            {pan.map((item) => {
              return (
                <>
                  <Col lg={6}>
                    <Fade bottom>
                      <Card
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                      />
                    </Fade>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Menu;
