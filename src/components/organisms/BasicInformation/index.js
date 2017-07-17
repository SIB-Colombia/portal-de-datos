import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import { Link, HumboldtMap } from 'components'

const Wrapper = styled.div`
  .title {
    font-weight: 400;
    font-size: 20px;
    padding-left: 30px;
    color: #4B5353;
    padding-top: 40px;
  }
  .title-two {
    font-size: 30px;
    padding-left: 30px;
    color: #4B5353;
  }
  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }
  .sub-title{
    font-size: 40px;
    font-style: italic;
    color: #4B5353;
    text-align: center;
  }

  .breadcrums {
    font-size: 22px;
    font-weight: 200;
    text-align: center;
  }

  .detalles-basicos {
    padding: 20px;
    font-size: 20px;
    color: #4B5353;
    font-weight: 200
  }

  .detalle-item {
    padding: 5px;
  }
  .sobre-recurso {
    font-size: 20px;
    font-weight: 200;
    color: #4B5353;
    padding: 30px;
    column-count: 2;
    line-height: 40px;
  }
`

class BasicInformation extends React.Component {

  static propTypes = {
    record: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row center="md">
            <Col className="title" md>REGISTRO BIOLÓGICO</Col>
          </Row>
          <Row center="md">
            <Col className="accent-title" md={1} />
          </Row>
          <Row style={{ padding: 20 }}>
            <Col md={12} className="sub-title" >Enterolobium schomburgkii (Benth.) Benth.</Col>
            <Col md className="breadcrums">Reino &gt; Filo &gt; Clase &gt; Orden &gt; Familia &gt; Género &gt; Especie</Col>
          </Row>
        </Grid>
        <Divider />
        <Grid>
          <Row className="detalles-basicos">
            <Col md={6} className="detalle-item"><strong>Especies:</strong> <Link to={'to'}><i>Enterolobium schomburgkii (Benth.) Benth.</i></Link></Col>
            <Col md={6} className="detalle-item"><strong>Recurso:</strong> <Link to={'to'}>Nombre del recurso</Link></Col>
            <Col md={6} className="detalle-item"><strong>Verbatim Name:</strong> Enterolobium schomburgkii</Col>
            <Col md={6} className="detalle-item"><strong>Publicador:</strong> <Link to={'to'}>Nombre del publicador</Link></Col>
            <Col md={12} className="detalle-item"><strong>Ubicacion:</strong> Departamento, País</Col>
            <Col md={12} className="detalle-item"><strong>Basis of Record:</strong> Observación humana</Col>
          </Row>
        </Grid>
        <HumboldtMap />
        <Grid>
          <Row>
            <Col className="title-two" md={12}>Sobre el recurso</Col>
            <Col className="accent-title" md={1} />
            <Col md={12} className="sobre-recurso">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default BasicInformation
