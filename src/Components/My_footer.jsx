import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../assets/images/nav_logo.png";
import { Call, Facebook, Instagram, Link_in, Message } from "./SvgIcon";

const My_footer = () => {
  return (
    <>
      <section className="bg-black position-relative z-1"id="footer">
        <div className="ellips3 d-md-block d-none "></div>
        <div className="ellips4 d-md-block d-none "></div>
        <Container className="my_container pt-60">
          <Row className="d-flex justify-content-between ">
            <Col lg={4}>
              <img src={footer_logo} alt="#" />
              <p className="fs-16 ff_inter font_medium text-white op_08 pt-3">
                En Exclusive Games somos un equipo{" "}
                <span className="fs-16 ff_inter font_medium text-white d-lg-block">
                  apasionado personas dedicadas al desarrollo{" "}
                </span>{" "}
                de multiplataformas para juegos de azar
              </p>
              <div className="d-flex gap-3 align-items-center pt-4">
                <a className="link" href="https://www.instagram.com/">
                  <Instagram />
                </a>
                <a className="link" href="https://www.facebook.com/">
                  <Facebook />
                </a>
                <a className="link" href="https://in.linkedin.com/">
                  <Link_in />
                </a>
              </div>
            </Col>

            <Col lg={2} md={4} sm={8} xs={6} className="pt-lg-0 pt-4">
              <ul>
                <li className="fs-16 ff_inter font_bold text-white cusor_point">
                  {" "}
                  Menú principal
                </li>
                <li className="fs-16 ff_inter font_medium text-white op_08 pt-3 cusor_point opacity_08">
                  Hogar
                </li>
                <li className="fs-16 ff_inter font_medium text-white  pt-2 cusor_point opacity_08">
                  Misión
                </li>
                <li className="fs-16 ff_inter font_medium text-white  pt-2 cusor_point opacity_08">
                  Tragamonedas
                </li>
                <li className="fs-16 ff_inter font_medium text-white  pt-2 cusor_point opacity_08">
                  Por qué elegirnos
                </li>
                <li className="fs-16 ff_inter font_medium text-white  pt-2 cusor_point opacity_08">
                  Ofertas
                </li>
              </ul>
            </Col>
            <Col lg={2} md={4} sm={4} xs={6} className="pt-lg-0 pt-4">
              <ul>
                <li className="fs-16 ff_inter font_bold text-white cusor_point">
                  {" "}
                  Atención al cliente
                </li>
                <li className="fs-16 ff_inter font_medium text-white opacity_08 pt-3 cusor_point">
                  ¿Necesitas ayuda?
                </li>
                <li className="fs-16 ff_inter font_medium text-white opacity_08 pt-2 cusor_point">
                  política de privacidad
                </li>
                <li className="fs-16 ff_inter font_medium text-white opacity_08 pt-2 cusor_point">
                  Términos de servicios
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={4} className="pt-lg-0 pt-4 ">
              <p className="fs-16 ff_inter font_bold text-white cusor_point">
                {" "}
                Ponerse en contacto
              </p>
              <div className="d-flex align-items-center gap-2 pt-2 cusor_point">
                <Message />
                <p className="fs-16 ff_inter font_medium text-white opacity_08 ">
                  juegosexclusivos@gmail.com
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 pt-2 cusor_point">
                <Call />
                <p className="fs-16 ff_inter font_medium text-white opacity_08 ">
                  (101)342-7873
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div></div>
        <div className="pt-5">
          <span className="hrline">
            {" "}
            <hr />
          </span>
          <p className="fs-16 font_medium ff_inter l_height160 op_05 text-white pt-4 pb-4 text-center">
            © Juegos exclusivos - Todos los derechos reservados 2023
          </p>
        </div>
      </section>
    </>
  );
};

export default My_footer;
