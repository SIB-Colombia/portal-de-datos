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

class RegisterSection extends React.Component {

  static propTypes = {
    registro: PropTypes.any.isRequired,
    recurso: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      registro: [],
      recurso: [],
    }
  }

  componentWillMount() {
    this.setState({
      registro: this.props.registro,
      recurso: this.props.recurso,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Registro</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            <Col md={6} className="details-title">Base del registro</Col>
            <Col md={6}>{this.state.registro.baseRegistro}</Col>
            <Col md={6} className="details-title">Código de coleccíon</Col>
            <Col md={6}>{this.state.registro.codigoColeccion}</Col>
            <Col md={6} className="details-title">Nombre del recurso</Col>
            <Col md={6}>{this.state.recurso.nombre}</Col>
            <Col md={6} className="details-title">Código de la institucíon</Col>
            <Col md={6}>{this.state.registro.codigoInstitucion}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default RegisterSection
