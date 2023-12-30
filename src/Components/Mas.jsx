import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import seven_img from "../assets/images/seven_img.png";
import blub from "../assets/images/blb.png";
import prson from '../assets/images/kperson.png'
import yes from '../assets/images/yes.png'

const Mas = () => {
  return (
    <div className=" pt-60 position-relative">
      <div className="ellips top-0">

      </div>
      <div className="ellips2 right-0 bottom-0"> 

      </div>
      <Container className="my_container pt-5">
        <Row className="d-flex align-items-center">
          <Col lg={6} data-aos="fade-right">
            <img className="w-100" src={seven_img} alt="#" />
          </Col>
          <Col lg={6} className="ps-4 d-flex flex-column align-items-lg-start align-items-center pt-lg-0 pt-4"data-aos="fade-left">
            <p className="fs-48 ff_annot font-normal text-white l_height160 text-lg-start text-center">
              Más razones para elegirnos
            </p>
            <div className="pt-4 ">
              <div className="mas_card d-flex ">
                <img src={blub} alt="#" />
                <div>
                  <p className="fs-32 ff_annot text-white font-normal l_height120">
                    200
                  </p>
                  <p className="fs-16 ff_inter text-white font_medium l_height160">
                    Páginas creadas
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 ">
              <div className="mas_card d-flex ">
                <img src={prson} alt="#" />
                <div>
                  <p className="fs-32 ff_annot text-white font-normal l_height120">
                  98% 
                  </p>
                  <p className="fs-16 ff_inter text-white font_medium l_height160">
                  Clientes Satisfechas
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 ">
              <div className="mas_card d-flex ">
                <img src={yes} alt="#" />
                <div>
                  <p className="fs-32 ff_annot text-white font-normal l_height120">
                    200
                  </p>
                  <p className="fs-16 ff_inter text-white font_medium l_height160">
                  Divisas Disponibles
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mas;
