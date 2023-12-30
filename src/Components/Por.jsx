import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import por_img from '../assets/images/por_img.png'
import clr_liness from '../assets/svg/clr_liness.svg'

const Por = () => {
  return (
<>
<section className='bgimg_white2 bg_white'id='por'>
    <Container className='my_container ptb_304'>
   <Row className=''>

    <Col lg={6} data-aos="fade-right">
    <div>
        <h5 className='fs-48 ff_annot txt_clr font-normal l_height120'>Por qué elegirnos</h5>
        <p className='fs-16 font_medium ff_inter txt_clr op_08 l_height160 pt-3'>Con Exclusive Games tenés is Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
        <div className="position-relative pt-4 ">
                  <button className=" ff_inter fs-16 font_bold empezar_btn l_height160 txt_clr ">
                  Aprende más
                  </button>
                  <div className=" lines">
                  <img src={clr_liness} alt="#" />

                   </div>
              </div>
    </div>
    </Col>
    <Col lg={6} className='pt-lg-0 pt-5'data-aos="fade-left">
        <img className='w-100' src={por_img} alt="#" />
    </Col>
   </Row>
   </Container>
</section>
</>

    )
}

export default Por