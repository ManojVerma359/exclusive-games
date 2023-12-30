import React from "react";
import { Container } from "react-bootstrap";
import { Clr_line, Right } from "./SvgIcon";
import luxry_img1 from '../assets/images/luxry_img1.png'
import luxry_img2 from '../assets/images/luxry_img2.png'
import luxry_img3 from '../assets/images/luxry_img3.png'
import luxry_img4 from '../assets/images/luxry_img4.png'
import clr_liness from '../assets/svg/clr_liness.svg'

const Luxury = () => {
  return (
    <>
      <section className="pt-60">
        <Container className="my_container position-relative luxy_bgimg">
          <div className="luxry_img1">
            <img src={luxry_img1} alt="#" />
          </div>
          <div className="luxry_img2 d-none d-lg-block">
            <img src={luxry_img2} alt="#" />
          </div>
          <div className="luxry_img4">
            <img src={luxry_img4} alt="#" />
          </div>
          <div className="luxry_img3 d-none d-lg-block">
            <img src={luxry_img3} alt="#" />
          </div>
          <div className=" ">
            <div className="d-flex flex-column align-items-center pt-5 pb-5">
              <p className="fs-32 ff_annot l_height120 font-normal text-white">
                Luxury
              </p>
              <p className="fs-16 font_medium ff_inter text-white op_08 l_height160 text-center pt-3">
                lleva tu experiencia de juego al siguiente nivel. Con{" "}
                <span className="fs-16 font_medium ff_inter d-block">
                  todas las características de la versión Silver y la
                </span>{" "}
                potencia adicional de la tecnología React .
              </p>
              <h3 className="fs-48 ff_annot font-normal text-white pt-4">
                $9000
              </h3>
              <div className="d-flex align-items-start flex-column justify-content-center ">
                <div className="d-flex   gap-2 pt-12 w-100">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08 text-center w-100">
                    Disponibles Payku, Pix, Depósitos en Euros,{" "}
                    <span className="d-block fs-16 ff_inter font_medium">
                      Criptomonedas, Cargas manuales
                    </span>
                  </p>
                </div>
                <div className="d-flex   gap-2 pt-12 w-100">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08 text-center w-100">
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div className="d-flex   gap-2 pt-12 w-100">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08 text-center w-100">
                    Bonos Editables, Happy Hours, Jackpots, Códigos{" "}
                    <span className="d-block fs-16 ff_inter font_medium">
                      Promocionales Regalo
                    </span>
                  </p>
                </div>
                <div className="d-flex   gap-2 pt-12 w-100">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08 text-center w-100">
                    Aplicación para Android y Windows de regalo.
                  </p>
                </div>
                <div className="d-flex   gap-2 pt-12 w-100">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08 text-center w-100">
                    Tiempo de creación 2 a 3 semanas
                  </p>
                </div>           
              </div>
              <div className="position-relative pt-5 d-flex align-items-center justify-content-center ">
                  <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
                  Comprar ahora
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

export default Luxury;
