import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ellos_img1 from '../assets/images/ellos_img1.png'
import ellos_img2 from '../assets/images/elllos_img2.png'
import ellos_img3 from '../assets/images/ellos_img3.png'
import { Line_svg } from './SvgIcon'

const Ellos = () => {
  return (
    <>
    <section className='position-relative z-1'>
    <div className='ellips2 top-0'>

</div>
<Container className='my_container ptb_150'>
    <div>
        <p className='fs-48 ff_annot font-normal text-white text-center'>Ellos eligieron apostar con nosotros</p>

        <Row className='pt-60 d-flex justify-content-center'>
        <Col md={4} sm={6}>
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={ellos_img1} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Rcasinovip
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6} className='pt-sm-0 pt-4'>
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={ellos_img2} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Rcasinovip
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6} className='pt-md-0 pt-4'>
                  <div className="position-relative">
                    <img className="b_radius16 w-100" src={ellos_img3} alt="#id" />
                    <div className="layer">
                      <div className=" ">
                        <div className="position-relative">
                          <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                          Rcasinovip
                          </button>
                          <div className=" lines">
                            <Line_svg />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>        </Row>
        <p className='fs-16 font_semibold ff_inter text-white text-center l_height160 pt-5'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
<span className='fs-16 font_semibold ff_inter text-white d-block'>Ahora, la próxima apuesta está en tus manos.</span>
Elige ganar. Elige exclusive game.</p>
    </div>


</Container>
    </section>
    </>
  )
}

export default Ellos