import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import stranz from "../assets/images/stranz.png";
import { Line_svg, Right } from "./SvgIcon";
import vector from '../assets/images/Vector.png'

const Silver = () => {
  return (
    <>
      <div className="bg_clr2 pt-5">
        <Container className="my_container pt-5">
          <div className="d-flex flex-column  align-items-center">
            <p className="fs-48 ff_annot text-white l_height160 font-normal ">
              Nuestras ofertas
            </p>
            <p className="fs-16 ff_inter text-white font_medium">
              Te ofrecemos las mejores experiencias de juegos para tus clientes.
            </p>
          </div>
       <div className=" mt-5">
           <Row className="silver_card  d-flex justify-content-between my_container align-items-center">
            <Col lg={7} className="position-relative">
              <div className="ellips6"></div>
              <img className="w-100 z-3 position-relative"  src={stranz} alt="#" />
              <div className=" pt-2">
                <img className="w-100" src={vector} alt="#" />
              </div>
                          </Col>
            <Col lg={5} className="pt-5">
                <p className="fs-32 ff_annot text-white l_height120">Silver</p>
                <p className="fs-16 ff_inter text-white op_08 l_height160 pt-3 font_medium">Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                <p className="fs-48 ff_annot text-white pt-4">$5000</p>
                <div className="d-flex   gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales
                    </p>
                  </div>
                <div className="d-flex   gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                    Control de RTP (controlás qué porcentaje pagar)
                    </p>
                  </div>
                <div className="d-flex   gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                    Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
                    </p>
                  </div>
                <div className="d-flex   gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                    Aplicación para Android y Windows de regalo.
                    </p>
                  </div>
                <div className="d-flex   gap-2 pt-12">
                    <Right />
                    <p className="fs-16 ff_inter font_medium text-white op_08 ">
                    Tiempo de creación 2 a 3 semanas
                    </p>
                    
                  </div>
                  <div className="position-relative pt_40">
                <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                Comprar ahora
                </button>
                <div className=" lines">
                  <Line_svg />
                </div>
                </div>
            </Col>
          </Row>
       </div>
        </Container>
      </div>
    </>
  );
};

export default Silver;
