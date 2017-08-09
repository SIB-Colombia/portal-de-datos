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

class MeasuresFactsSection extends React.Component {

  static propTypes = {
    ocurrence: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      ocurrence: [],
    }
  }

  componentWillMount() {
    this.setState({
      ocurrence: this.props.ocurrence,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Medidas o hechos</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.measurementOrFact.measurementID && <Col md={6} className="details-title">Identificador</Col>}
            {this.state.measurementOrFact.measurementID && <Col md={6}>{this.state.measurementOrFact.measurementID}</Col>}
            {this.state.measurementOrFact.measurementType && <Col md={6} className="details-title">Tipo</Col>}
            {this.state.measurementOrFact.measurementType && <Col md={6}>{this.state.measurementOrFact.measurementType}</Col>}
            {this.state.measurementOrFact.measurementValue && <Col md={6} className="details-title">Valor</Col>}
            {this.state.measurementOrFact.measurementValue && <Col md={6}>{this.state.measurementOrFact.measurementValue}</Col>}
            {this.state.measurementOrFact.measurementAccuracy && <Col md={6} className="details-title">Precisión</Col>}
            {this.state.measurementOrFact.measurementAccuracy && <Col md={6}>{this.state.measurementOrFact.measurementAccuracy}</Col>}
            {this.state.measurementOrFact.measurementUnit && <Col md={6} className="details-title">Unidad de medida</Col>}
            {this.state.measurementOrFact.measurementUnit && <Col md={6}>{this.state.measurementOrFact.measurementUnit}</Col>}
            {this.state.measurementOrFact.measurementDeterminedBy && <Col md={6} className="details-title">Determinado por</Col>}
            {this.state.measurementOrFact.measurementDeterminedBy && <Col md={6}>{this.state.measurementOrFact.measurementDeterminedBy}</Col>}
            {this.state.measurementOrFact.measurementDeterminedDate && <Col md={6} className="details-title">Fecha</Col>}
            {this.state.measurementOrFact.measurementDeterminedDate && <Col md={6}>{this.state.measurementOrFact.measurementDeterminedDate}</Col>}
            {this.state.measurementOrFact.measurementMethod && <Col md={6} className="details-title">Método</Col>}
            {this.state.measurementOrFact.measurementMethod && <Col md={6}>{this.state.measurementOrFact.measurementMethod}</Col>}
            {this.state.measurementOrFact.measurementRemarks && <Col md={6} className="details-title">Comentarios</Col>}
            {this.state.measurementOrFact.measurementRemarks && <Col md={6}>{this.state.measurementOrFact.measurementRemarks}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default MeasuresFactsSection
