import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Line_svg, Right } from './SvgIcon'
import plat_img from "../assets/images/plat_img2.png"

const Platinum = () => {
  return (
   <>
   <section className='bg_clr2 pt-60 position-relative z-1'>
    <div className='ellips'>

    </div>

<Container className='my_container platinum_card'>
    <div className=' '>
        <Row className='d-flex align-items-center '>
            <Col lg={5} className='ps-lg-5'>
                <div>
                    <p className='fs-32 ff_annot l_height120 text-white text-lg-start text-center'>Platinum</p>
                    <p className='fs-16 ff_inter font_medium l_height160 text-white pt-3 text-lg-start text-center'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                    <p className='fs-48 ff_annot l_height120 text-white pt-4 text-lg-start text-center'>Consultar precio</p>
                    <div className="d-flex   gap-2 pt-3 justify-content-lg-start justify-content-center ">
                  <Right />
                  <p className="fs-16 ff_inter font_medium text-white op_08  ">
                  Personalizable 
                  </p>
                </div>
              <div className='d-flex justify-content-center justify-content-lg-start'>
              <div className="position-relative pt_40 ">
                <button className="text-white ff_inter fs-16 font_bold acces_btn  ">
                Comprar ahora
                </button>
                <div className=" lines">
                  <Line_svg />
                </div>
                </div>
              </div>
                </div>
            
            </Col>
            <Col lg={7} className='pt-lg-0 pt-5 pe-lg-3 position-relative'>
                <img className=' width w-100' src={plat_img} alt="#" />
                <div className='ellips5'>

                </div>
            </Col>
        </Row>

    </div>

</Container>
   </section>
   </>
  )
}

export default Platinum