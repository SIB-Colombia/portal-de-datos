import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import { palette } from 'styled-theme'

const Wrapper = styled.footer`
  .creative {
    padding: 15px 0px;
    background-color: #000000;
    text-align: center;
    color:${palette('option', 0)};
    font-weight: 200;
  }

  .sib {
      background-color: #00292B;
      color: #FFFFFF;
      padding: 30px;
  }

  .access-direct {
      background-color: #00484D;
      color: #FFFFFF;
      padding: 70px;
  }

  a{
      font-size: 18px;
      color:${palette('option', 0)};
      text-decoration: none;
  }
`

const FooterPage = () => {
  return (
    <Wrapper>
      <Grid fluid className="access-direct">
        <Row around="md">
          <Col xs={12} sm={12} md={6} lg={3}>
            <Grid fluid >
              <Row middle="xs">
                <Col xs={4} sm={2} md={2} lg={3}>
                  <img src="/home/catalogo.png" alt="" />
                </Col>
                <Col xs={8} sm={10} md={10} lg={9}>
                  <a href="http://design.catalogo.lumon.com.co" target="_blank" rel="noopener noreferrer"><strong>CATÁLOGO</strong> DE LA BIODIVERSIDAD</a>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Grid fluid >
              <Row middle="xs">
                <Col xs={4} sm={2} md={2} lg={3}>
                  <img src="/home/portal.png" alt="" />
                </Col>
                <Col xs={8} sm={10} md={10} lg={9}>
                  <a href="http://design.portal.lumon.com.co" target="_blank" rel="noopener noreferrer">PORTAL DE <strong>DATOS</strong></a>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Grid fluid >
              <Row middle="xs">
                <Col xs={4} sm={2} md={2} lg={3}>
                  <img src="/home/colecciones.png" alt="" />
                </Col>
                <Col xs={8} sm={10} md={10} lg={9}>
                  <a href="http://design.catalogo.lumon.com.co" target="_blank" rel="noopener noreferrer"><strong>COLECCIONES</strong> EN LÍNEA</a>
                </Col>
              </Row>
            </Grid>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Grid fluid >
              <Row middle="xs">
                <Col xs={4} sm={2} md={2} lg={3}>
                  <img src="/home/listas.png" alt="" />
                </Col>
                <Col xs={8} sm={10} md={10} lg={9}>
                  <a href="http://design.catalogo.lumon.com.co" target="_blank" rel="noopener noreferrer"><strong>LISTAS</strong> DE ESPECIES</a>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
      <Grid fluid className="sib">
        <Row middle="xs" center="xs">
          <Col xs={12} sm={6} md={6} lg={6}>
            <img src="/SiB-Footer-02.svg" alt="Sistema de Información sobre Biodiversidad de Colombia" width="300" />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Link>Sobre el portal</Link> | <Link>Terminos de uso</Link>
          </Col>
        </Row>
      </Grid>
      <Grid fluid className="creative">
        <Row around="md">
          <Col xs={12} sm={12} md={12} lg={12}>
            Creative Commons 4.0 · 2015
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
export default FooterPage
