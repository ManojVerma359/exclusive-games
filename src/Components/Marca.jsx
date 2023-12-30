import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Person, {
  Down_arrow,
  Fan,
  Sun_light,
  Up_arrow,
  Clr_line,
  Line_svg,
} from "./SvgIcon";
import simg1 from "../assets/images/simg1.png";
import simg2 from "../assets/images/simg2.png";
import simg3 from "../assets/images/simg3.png";
import simg4 from "../assets/images/simg4.png";
import simg5 from "../assets/images/simg5.png";
import simg6 from "../assets/images/simg6.png";
import clr_liness from '../assets/svg/clr_liness.svg'


const Marca = () => {
  return (
    <>
      <section className="bgimg_white bg_white ">
        <Container className="my_container ptb-243">
          <div className="">
            <h2 className="fs-48 font-normal ff_annot l_height120 txt_clr text-center ">
              Nuestros Atributos de Marca
            </h2>
          </div>
          <Row className="pt-60 d-flex justify-content-lg-between position-relative justify-content-center ">
            <Col lg={3} sm={6} className="d-flex flex-column align-items-center ">
              <span>
                <Person />
              </span>
              <p className="fs-20 txt_clr ff_annot font-normal l_height120 pt-3">
                Inteligencia
              </p>
              <p className="fs-16 font_medium txt_clr l_height160 ff_inter op_08 text-center">
                Comprendemos a la perfección los <span className="fs-16 font_medium txt_clr l_height160 ff_inter d-xl-block">gustos de las personas y el
                mundo</span> del gaming.
              </p>
            </Col>
            <Col lg={3} sm={6}  className="d-flex flex-column align-items-center pt-4 pt-sm-0 ">
              <span>
                <Fan />
              </span>
              <p className="fs-20 txt_clr ff_annot font-normal l_height120 pt-3">
                Proactividad
              </p>
              <p className="fs-16 font_medium txt_clr l_height160 ff_inter op_08 text-center">
                Somos creadores de cambios que exploran nuevas formas de
                entretenimiento.
              </p>
            </Col>
            <Col lg={3} sm={6} className="d-flex flex-column align-items-center pt-4 pt-lg-0">
              <div>
                <span className="up_arrows d-none d-lg-block ">
                  <Up_arrow />
                </span>
                <span className="Down_arrow d-none d-lg-block ">
                  <Down_arrow />
                </span>
              </div>
              <span>
                <Sun_light />
              </span>
              <p className="fs-20 txt_clr ff_annot font-normal l_height120 pt-3">
                Innovación
              </p>
              <p className="fs-16 font_medium txt_clr l_height160 ff_inter op_08 text-center">
                Pensamos fuera de la caja para estar siempre un paso adelante.
              </p>
            </Col>
          </Row>
          <div className="pt-150">
            <div data-aos="fade-right">
              <h3 className="fs-48 ff_annot txt_clr font-normal l_height120 text-center">
                Slots{" "}
              </h3>
              <p className="fs-16 ff_inter font_medium txt_clr op_08 text-center pt-3">
                En Exclusive Games, ofrecemos una selección de más de 600 juegos
                de los principales desarrolladores, como{" "}
                <span className="d-lg-block fs-16 ff_inter font_medium txt_clr ">
                  Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y
                  Tom Horn. Nuestro equipo trabaja incansablemente para
                </span>{" "}
                innovar y ampliar nuestra oferta de experiencias, garantizando
                la máxima seguridad con operaciones protegidas por{" "}
                <span className="d-lg-block fs-16 ff_inter font_medium txt_clr ">
                  cifrado SSL de 256 bits.
                </span>
              </p>
            </div>
            <div className="pt-60"data-aos="fade-left">
              <Row >
              <Col lg={4} sm={6}>
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={simg1} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
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
                    <img className="b_radius16 w-100" src={simg2} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
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
                    <img className="b_radius16 w-100" src={simg3} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>              
           
           
                <Col lg={4} sm={6} className=" pt-4">
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={simg4} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className=" pt-4">
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={simg5} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className=" pt-4">
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={simg6} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                            Jugar
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
              <div className="d-flex justify-content-center">
                <div className="position-relative pt_40 ">
                  <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
                    Mostrar más
                  </button>
                  <div className=" lines">
                  <img src={clr_liness} alt="#" />

                  </div>
                </div>
              </div>
            
          </div>
        </Container>
      </section>
    </>
  );
};

export default Marca;
