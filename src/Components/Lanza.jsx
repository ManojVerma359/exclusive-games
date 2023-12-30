import React from "react";
import { Container } from "react-bootstrap";
import clr_liness from '../assets/svg/clr_liness.svg'

const Lanza = () => {
  return (
    <>
      <section className="">
        <Container className="my_container ptb_150">
          <div className="lanza_bgimg ">
            <div className="d-flex flex-column align-items-center justify-content-center ptb-104">
              <p className="fs-32 ff_annot font-normal text-white ">
                Lanza tu propia plataforma en sólo 2 semanas
              </p>
              <div className="position-relative pt-md-5 pt-3 d-flex align-items-center justify-content-center ">
                <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
                  Leer más
                </button>
                <div className=" lines ">
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

export default Lanza;
