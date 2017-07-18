import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div `
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

class TaxonSection extends React.Component {

  static propTypes = {
    taxon: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      taxon: [],
    }
  }

  componentWillMount() {
    this.setState({
      taxon: this.props.taxon,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Taxón</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            <Col md={6} className="details-title">Reino</Col>
            <Col md={6}>{this.state.taxon.reino}</Col>
            <Col md={6} className="details-title">Filo</Col>
            <Col md={6}>{this.state.taxon.filo}</Col>
            <Col md={6} className="details-title">Clase</Col>
            <Col md={6}>{this.state.taxon.clase}</Col>
            <Col md={6} className="details-title">Orden</Col>
            <Col md={6}>{this.state.taxon.orden}</Col>
            <Col md={6} className="details-title">Familia</Col>
            <Col md={6}>{this.state.taxon.familia}</Col>
            <Col md={6} className="details-title">Género</Col>
            <Col md={6}>{this.state.taxon.genero}</Col>
            <Col md={6} className="details-title">Epíteto especifico</Col>
            <Col md={6}>{this.state.taxon.epitetoEspecifico}</Col>
            <Col md={6} className="details-title">Nombre científico</Col>
            <Col md={6}>{this.state.taxon.nombreEspecifico}</Col>
            <Col md={6} className="details-title">Rank</Col>
            <Col md={6}>{this.state.taxon.rank}</Col>
            <Col md={6} className="details-title">Vernacular name</Col>
            <Col md={6}>{this.state.taxon.vernacularName}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default TaxonSection
