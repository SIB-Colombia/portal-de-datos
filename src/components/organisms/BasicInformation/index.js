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
    margin-top: 50px;
  }
  .accent-title {
    margin-top: 10px;
    border-top: 3px solid #ff7847;
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
    color: #292929;
  }

  .detalles-basicos {
    padding: 20px;
    font-size: 22px;
    color: #4B5353;
    font-weight: 200
  }

  .detalle-item {
    padding: 5px;
    font-weight: 200;
    span {
      font-weight: 600
    }
  }
  .sobre-recurso {
    font-size: 20px;
    font-weight: 200;
    color: #4B5353;
    padding: 30px;
    column-count: 2;
    line-height: 40px;
    margin-bottom: 20px;
  }
`

class BasicInformation extends React.Component {

  static propTypes = {
    record: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      record: [],
    }
  }

  componentWillMount() {
    this.setState({
      record: this.props.record,
    })
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
            <Col md={12} className="sub-title" >{this.props.record.nombreCientifico}</Col>
            <Col md className="breadcrums">
              {this.props.record.taxon.reino} &gt; {this.props.record.taxon.filo} &gt; {this.props.record.taxon.clase} &gt; {this.props.record.taxon.orden} &gt; {this.props.record.taxon.familia} &gt; {this.props.record.taxon.genero} &gt; {this.props.record.especies}
            </Col>
          </Row>
        </Grid>
        <Divider />
        <Grid>
          <Row className="detalles-basicos">
            <Col md={6} className="detalle-item"><span>Especies:</span> <Link to={'to'}><i> {this.props.record.especies}</i></Link></Col>
            <Col md={6} className="detalle-item"><span>Recurso:</span> <Link to={'to'}> {this.props.record.recurso.nombre}</Link></Col>
            <Col md={6} className="detalle-item"><span>Verbatim Name:</span> {this.props.record.verbatimName}</Col>
            <Col md={6} className="detalle-item"><span>Publicador:</span> <Link to={'to'}> {this.props.record.publicador.nombre}</Link></Col>
            <Col md={12} className="detalle-item"><span>Ubicacion:</span> {`${this.props.record.ubicacion.departamento}, ${this.props.record.ubicacion.pais}`}</Col>
            <Col md={12} className="detalle-item"><span>Basis of Record:</span> {this.props.record.basisOfRecord}</Col>
          </Row>
        </Grid>
        <HumboldtMap />
        <Grid>
          <Row>
            <Col className="title-two" md={12}>Sobre el recurso</Col>
            <Col className="accent-title" md={1} />
            <Col md={12} className="sobre-recurso">{this.props.record.recurso.descripcion}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default BasicInformation
