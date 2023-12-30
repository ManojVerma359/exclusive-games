import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import jackpot from "../assets/images/jackpot.png";
import { Line_svg, Right } from "./SvgIcon";
// import jackpot_ellips from '../assets/images/ellips_jackpt.png'
// import jk_ellips2 from '../assets/images/jk_ellips2.png'
import j_img1 from "../assets/images/j_img1.png";
import j_img2 from "../assets/images/j_img2.png";
import j_img3 from "../assets/images/j_img3.png";

const Jackpot = () => {
  return (
    <>
      <section id="jackpot" className="jack_bgimg positon-relative z_idx">

        <Container className="my_container">
        <div className="ellips">

</div>
    
        <div className="ellips2">

</div>
    
          <div className="ptb_90">
            <Row>
              <Col lg={6} className="pe-3"data-aos="fade-right">
                <img className="w-100" src={jackpot} alt="#" />
              </Col>
              <Col
                lg={6}
                className="ps-3 d-flex flex-column justify-content-center"data-aos="fade-left"
              >
                <p className="fs-48 ff_annot font-normal text-white ">
                  Potenciando sus elecciones
                </p>
                <p className="fs-16 ff_inter font_medium text-white op_08 pt-3">
                  Con Exclusive Game lo mejor está de tu lado.
                </p>
                <div className="pt-4">
                  <div className="d-flex align-items-center gap-2 ">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                      Tecnología HTML5
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                      Versión PC y móvil
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                      Control de RTP (controlás qué porcentaje pagar)
                    </p>
                  </div>
                  <div className="d-flex  gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                      Bonos editables, happy hours, Jackpots, códigos{" "}
                      <span className="fs-16 ff_inter font_medium text-white d-block">
                        promocionales.
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center  gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                      Aplicación para android y windows de regalo.
                    </p>
                  </div>
                  <p className="fs-16 ff_inter font_medium text-white op_08 pt-4">
                    Te reintegramos todo lo invertido en fichas en la moneda que
                    elijas.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="ptb_150 d-flex justify-content-center">
              <div className="card1 position-relative ">
                {/* <div className='j_ellips'><img className='' src={jackpot_ellips} alt="#" />
                    </div>
                    <div className='j_ellips2'>
                    <img className='' src={jk_ellips2} alt="#" />

                    </div> */}
                <p className="fs-48 font-normal text-white ff_annot l_height120 text-center z-3 position-relative">
                  lanza tu propia plataforma{" "}
                  <span className="fs-48 font-normal text-white ff_annot l_height120 d-xl-block">
                    en sólo 2 semanas
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="fs-48 ff_annot text-white font-normal text-center">
                Juegos en vivo
              </p>
              <div className="pt-60 ">
                <Row className="d-flex justify-content-center">
                <Col lg={4} sm={6} >
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={j_img1} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Reproducir ahora
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="pt-sm-0 pt-4">
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={j_img2} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Reproducir ahora
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="pt-lg-0 pt-4">
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={j_img3} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Reproducir ahora
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Jackpot;
