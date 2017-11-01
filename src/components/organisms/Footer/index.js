import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import { palette } from 'styled-theme'


/*
    width: 76rem;
*/

const Wrapper = styled.footer`

  .participate {
    background-color: #00484D;
    color:${palette('grayscale', 0)};
  }

  .creative {
    padding-top: 5.5px;
    padding-bottom: 5.5px;
    background-color: #000;
    text-align: center;
    color:${palette('grayscale', 0)};
    font-weight: 200;
    font-size: 14px;
  }

  .sib {
    background-color: #00292B;
    color:${palette('grayscale', 0)};
    padding: 30px;
  }

  .spacing {
    padding-top: 52.5px;
    padding-bottom: 52.5px;
  }

  .links {
    padding-top: 4px;
    padding-bottom: 4px;
    a {
      color:${palette('grayscale', 0)};
      font-size: 14px;
    }
  }
`

const FooterPage = () => {
  return (
    <Wrapper>
      <Grid fluid className="participate">
        <Row center="xs" className="spacing">
          <Col xs={12} sm={6} md={3} lg={3}>
            <a href="http://design.catalogo.lumon.com.co/"><img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/png/logo-catalogo-b.png" alt="" /></a>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <a href="/"><img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/png/logo-datos-b.png" alt="" /></a>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <a href="http://colecciones.lumon.com.co/"><img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/png/logo-colecciones-b.png" alt="" /></a>
          </Col>
          <Col xs={12} sm={6} md={3} lg={3}>
            <a href="http://plistase.lumon.com.co/"><img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/png/logo-listas-b.png" alt="" /></a>
          </Col>
        </Row>
      </Grid>
      <Grid fluid className="sib">
        <Row center="xs" middle="xs">
          <Col sm={6} md={6} lg={5} className="align-left">
            <img src="/SiB-Footer-02.svg" alt="Sistema de Información sobre Biodiversidad de Colombia" width="300" />
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} className="links align-right">
            <Link>Sobre el portal</Link> | <Link>Terminos de uso</Link>
          </Col>
        </Row>
      </Grid>
      <Grid fluid className="creative">
        <Row center="md">
          <Col xs={12} sm={12} md={12} lg={12}>
            Creative Commons 4.0 · 2015
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
export default FooterPage
