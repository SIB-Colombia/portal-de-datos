import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
  .title-two {
    font-size: 30px;
    padding-left: 20px;
    color: #4B5353;
    margin-top: 40px;
  }
  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }

  .more-details {
    color: #4B5353;
    font-size: 20px;
    line-height: 45px;
    font-weight: 200;
    padding: 30px 0px;
    .details-title{
      font-weight: 600;
    }
  }
`

class LocationSection extends React.Component {

  static propTypes = {
    ubicacion: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      ubicacion: [],
    }
  }

  componentWillMount() {
    this.setState({
      ubicacion: this.props.ubicacion,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Ubicación</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            <Col md={6} className="details-title">Precisión de coordenada</Col>
            <Col md={6}>{this.state.ubicacion.precisionCoordenada}</Col>
            <Col md={6} className="details-title">País</Col>
            <Col md={6}>{this.state.ubicacion.pais}</Col>
            <Col md={6} className="details-title">Departamento</Col>
            <Col md={6}>{this.state.ubicacion.departamento}</Col>
            <Col md={6} className="details-title">Latitud decimal</Col>
            <Col md={6}>{this.state.ubicacion.latitudDecimal}</Col>
            <Col md={6} className="details-title">Longitud decimal</Col>
            <Col md={6}>{this.state.ubicacion.longitudDecimal}</Col>
            <Col md={6} className="details-title">Geodetic Datum</Col>
            <Col md={6}>{this.state.ubicacion.geodeticDatum}</Col>
            <Col md={6} className="details-title">Localidad</Col>
            <Col md={6}>{this.state.ubicacion.localidad}</Col>
            <Col md={6} className="details-title">State province</Col>
            <Col md={6}>{this.state.ubicacion.stateProvince}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default LocationSection
