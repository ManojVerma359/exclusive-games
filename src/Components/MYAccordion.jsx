import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


const MYAccordion = () => {
  return (
  <>
  <section className='position-relative z-1'id='accodin'>
    <div className='ellips'>

    </div>
<Container className='my_container'>
    <p className='fs-48 ff_annot text-uppercase text-white l_height120 text-center'>Preguntas más frecuentes</p>

    <div className='accordin_container pt-60'>

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='fs-20 text-white ff_annot'>¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='fs-20 text-white ff_annot'>¿Cómo garantizan la seguridad de las operaciones en sus juegos?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='fs-20 text-white ff_annot'> ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='fs-20 text-white ff_annot'> ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='fs-20 text-white ff_annot'>¿Qué métodos de pago aceptan?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='fs-20 text-white ff_annot'>¿Puedo probar sus juegos antes de comprometerme?</Accordion.Header>
        <Accordion.Body>
        En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>


    </div>


</Container>
  </section>
  </>
  )
}

export default MYAccordion