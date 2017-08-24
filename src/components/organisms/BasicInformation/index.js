import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import { Link, HumboldtMap } from 'components'
import theme from '../../themes/default'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'

const Wrapper = styled.div`
  margin-top: 140px;
  .title {
    font-weight: ${theme.fonts.titleTwo.weight};
    font-size: ${theme.fonts.subTitleOne.font};
    color: ${theme.palette.text[0]};
    padding-top: 40px;
  }
  .title-two {
    font-size: ${theme.fonts.titleTwo.font};
    color: ${theme.palette.text[0]};
    margin-top: 60px;
    padding-left: 30px;
  }
  .accent-title {
    margin-top: 20px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }
  .sub-title{
    margin-top: 20px;
    font-size: 32px;
    font-style: italic;
    color: ${theme.palette.text[0]};
    text-align: center;
  }

  .breadcrums {
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    text-align: center;
    color: ${theme.palette.text[0]};
    margin-top: 7px;
    margin-bottom: 30px;
  }

  .detalles-basicos {
    margin-top: 40px;
    margin-bottom: 40px;
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleOne.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    line-height: 28px;
  }

  .detalle-item {
    font-weight: ${theme.fonts.subTitleTwo.weight};
    span {
      font-weight: 600;
    }
  }
  .sobre-recurso {
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    color: ${theme.palette.text[0]};
    padding: 30px;
    column-count: 2;
    line-height: 28px;
    margin-bottom: 60px;
  }

  .icon {
    fill: ${theme.palette.text[0]} !important;
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

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row center="md">
            <Col className="title" xs={12} sm={12} md={12} lg={12}>REGISTRO BIOLÓGICO</Col>
            <Col className="accent-title" xs={3} sm={2} md={1} lg={1} />
          </Row>
          <Row>
            <Col md={12} className="sub-title" >{this.props.record[0].scientificName}</Col>
            <Col md className="breadcrums">
              {this.props.record[0].kingdom} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record[0].phylum} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record[0].order} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record[0].family} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record[0].genus} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record[0].specificEpithet}
            </Col>
          </Row>
        </Grid>
        <Divider />
        <Grid>
          <Row className="detalles-basicos">
            <Col md={6} className="detalle-item"><span>Nombre científico:</span> <Link to={'to'}><i> {this.props.record[0].scientificName}</i></Link></Col>
            <Col md={6} className="detalle-item"><span>Nombre del recurso:</span> <Link to={'to'}> {this.props.record[0].resourceName}</Link></Col>
            <Col md={6} className="detalle-item"><span>Ubicacion:</span> {`${this.props.record[0].country}, ${this.props.record[0].stateProvince}`}</Col>
            <Col md={6} className="detalle-item"><span>Publicador:</span> <Link to={'to'}> {this.props.record[0].providerName}</Link></Col>
            <Col md={12} className="detalle-item"><span>Base del Registro:</span> {this.props.record[0].basisOfRecord}</Col>
            <Col md={12} className="detalle-item"><span>Hábitat:</span> {this.props.record[0].habitat}</Col>
          </Row>
        </Grid>
        <HumboldtMap marker={[this.props.record[0].decimalLatitude, this.props.record[0].decimalLongitude]} zoom />
        <Grid>
          <Row>
            <Col className="title-two" md={12}>Sobre el recurso</Col>
            <Col className="accent-title" md={1} />
            <Col md={12} className="sobre-recurso">{/* this.props.record.recurso.descripcion*/} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, commodi, error. Amet impedit sit dolorem reiciendis maiores blanditiis qui temporibus numquam, ullam perferendis, labore doloribus officiis aut ipsum explicabo sapiente.</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default BasicInformation
