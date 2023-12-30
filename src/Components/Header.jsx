import React from "react";
import { Container } from "react-bootstrap";
import nav_logo from "../assets/images/nav_logo.png";
import { Line_svg, Clr_line, Close, Navicons } from "./SvgIcon";
import { useState } from "react";
import clr_liness from "../assets/svg/clr_liness.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const moment = () => {
    setShow(!show);
  };
  return (
    <>
      <section className="bg_heroimg min_vh810 d-flex flex-column overflow-hiddden">
        <nav
          className="
bg_navclr position-relative z-3"
        >
          <Container className="my_container">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="d-flex align-items-center justify-content-between w_100">
                <div className="pr_100">
                  <img src={nav_logo} alt="nav" />
                </div>
                <div className="d-flex align-items-center flex-xl-row flex-column min_100vh  me-lg-0 z-3 justify-content-between width_100">
                  <ul className={`${show ? "open" : ""} menubar `}>
                    <li>
                      <a
                        className="text-white ff_inter font_medium opacity_08"
                        href="#jackpot"
                        onClick={moment}
                      >
                        Hogar
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white ff_inter font_medium opacity_08"
                        href="#mision"
                        onClick={moment}
                      >
                        Misión
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white ff_inter font_medium opacity_08"
                        href="#accodin"
                        onClick={moment}
                      >
                        Tragamonedas
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white ff_inter font_medium opacity_08"
                        href="#por"
                        onClick={moment}
                      >
                        Por qué elegirnos
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white ff_inter font_medium opacity_08"
                        href="#footer"
                        onClick={moment}
                      >
                        Ofertas
                      </a>
                    </li>
                    <div className="position-relative pt_40 d-lg-none d-block">
                      <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
                        Acceso
                      </button>
                      <div className=" lines">
                        <Clr_line />
                      </div>
                    </div>
                  </ul>
                  <div>
                    <button
                      className="open d-block d-lg-none navicon  z_index nav_icon fills position-relative  p-4"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      {show ? <Close /> : <Navicons />}
                      {/* <Navicons /> */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="position-relative d-lg-block d-none">
                <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                  Acceso
                </button>
                <div className=" lines">
                  <Line_svg />
                </div>
              </div>
            </div>
          </Container>
        </nav>
        <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center container my_container">
          <h1 className="text-white fs-72 font-normal l_height120 ff_annot text-uppercase">
            Exclusive Games.
            <span className="text-white fs-72 font-normal ff_annot d-block">
              Pasión por ganar
            </span>
          </h1>
          <p className="fs-16 font_medium ff_inter text-white text-center  l_heigh160 op_08 pt-3">
            En Exclusive Games somos un equipo apasionado de personas dedicados
            al desarrollo de{" "}
            <span className="fs-16 font_medium ff_inter text-white d-block">
              multiplataformas para juegos de azar. A lo largo de nuestra vida
              consumimos todo tipo de
            </span>{" "}
            juegos hasta que un día decidimos crear los propios.
          </p>
          <div className="position-relative pt_40">
            <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
              Empezar
            </button>
            <div className=" lines">
              <img src={clr_liness} alt="#" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
