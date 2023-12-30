import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import poker from "../assets/images/poker_img.png";
import avitor_img from "../assets/images/aviator_img.png";

const Nuestra = () => {
  return (
    <>
      <section className="bg_clr2 mt_1 position-relative z_idx" id="mision">
        <Container className="pt-md-5 pt-2 pb-5 my_container  ">
     <Row className="d-flex justify-content-between pt-4 ">
      <div className="ellips">

      </div>
      <div className="ellips2">

      </div>
     <Col md={6} className="pe-lg-5 column_reverse"data-aos="fade-right" >
            <div>
              <img className="b_radius16 w-100" src={poker} alt="#" />
            </div>
            <div className="pt-60 pb_60">
              <h3 className="fs-48 font-normal ff_annot l_height120 text-white ">
                Nuestra Visión
              </h3>
              <p className="text-white ff_inter font_medium op_08 fs-16 pt- ">
                Nuestra visión es ser líderes indiscutibles en la industria{" "}
                <span className="d-lg-block ff_inter font_medium  fs-16">
                  de los juegos de azar y llevar nuestra pasión por el
                </span>{" "}
                entretenimiento más allá de las fronteras. Imagina un{" "}
                <span className="d-lg-block  ff_inter font_medium  fs-16">
                  mundo donde la emoción y la diversión no tengan límites,
                </span>{" "}
                y ese es el mundo que queremos crear contigo.
              </p>
              <p className="text_clr fs-16 font_bold ff_inter l_height160 pt-4 cusor_point">
                Aprende más -->
              </p>
            </div>
          </Col>

          <Col md={6} className="ps-lg-4 pt-md-0 pt-5" data-aos="fade-left">
            <div className="">
              <h3 className="fs-48 font-normal ff_annot l_height120 text-white ">
              Nuestra Misión
              </h3>
              <p className="text-white ff_inter font_medium op_08 fs-16 pt- ">
              Nuestra misión es simple pero poderosa: proporcionarte{" "}
                <span className="d-lg-block ff_inter font_medium  fs-16">
                la más amplia gama de soluciones de
                </span>{" "}
                alta calidad y rentabilidad. Estamos comprometidos a{" "}
                <span className="d-lg-block  ff_inter font_medium  fs-16">
                elevar tus expectativas y brindarte experiencias
                </span>{" "}
                inigualables.
              </p>
              <p className="text_clr fs-16 font_bold ff_inter l_height160 pt-4 cusor_point">
                Aprende más -->
              </p>
            </div>
            <div className="pt-60">
              <img className="w-100" src={avitor_img} alt="#" />
            </div>
          </Col>
     </Row>
        </Container>
      </section>
    </>
  );
};

export default Nuestra;
