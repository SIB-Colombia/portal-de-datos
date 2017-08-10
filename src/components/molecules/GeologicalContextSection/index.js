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

class GeologicalContextSection extends React.Component {

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
        <Col className="title-two" md={12}>Organismo</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.geologicalContextID && <Col md={6} className="details-title">ID del contexto geológico</Col>}
            {this.state.ocurrence.geologicalContextID && <Col md={6}>{this.state.ocurrence.geologicalContextID}</Col>}
            {this.state.ocurrence.earliestEonOrLowestEonothem && <Col md={6} className="details-title">Eón temprano o eonotema inferior</Col>}
            {this.state.ocurrence.earliestEonOrLowestEonothem && <Col md={6}>{this.state.ocurrence.earliestEonOrLowestEonothem}</Col>}
            {this.state.ocurrence.latestEonOrHighestEonothem && <Col md={6} className="details-title">Eón tardío o eonotema superior</Col>}
            {this.state.ocurrence.latestEonOrHighestEonothem && <Col md={6}>{this.state.ocurrence.latestEonOrHighestEonothem}</Col>}
            {this.state.ocurrence.earliestEraOrLowestErathem && <Col md={6} className="details-title">Era temprana o eratema inferior</Col>}
            {this.state.ocurrence.earliestEraOrLowestErathem && <Col md={6}>{this.state.ocurrence.earliestEraOrLowestErathem}</Col>}
            {this.state.ocurrence.latestEraOrHighestErathem && <Col md={6} className="details-title">Era tardía o eratema superior</Col>}
            {this.state.ocurrence.latestEraOrHighestErathem && <Col md={6}>{this.state.ocurrence.latestEraOrHighestErathem}</Col>}
            {this.state.ocurrence.earliestPeriodOrLowestSystem && <Col md={6} className="details-title">Periodo temprano o sistema inferior</Col>}
            {this.state.ocurrence.earliestPeriodOrLowestSystem && <Col md={6}>{this.state.ocurrence.earliestPeriodOrLowestSystem}</Col>}
            {this.state.ocurrence.latestPeriodOrHighestSystem && <Col md={6} className="details-title">Periodo tardío o sistema superior</Col>}
            {this.state.ocurrence.latestPeriodOrHighestSystem && <Col md={6}>{this.state.ocurrence.latestPeriodOrHighestSystem}</Col>}
            {this.state.ocurrence.earliestEpochOrLowestSeries && <Col md={6} className="details-title">Época temprana o serie inferior</Col>}
            {this.state.ocurrence.earliestEpochOrLowestSeries && <Col md={6}>{this.state.ocurrence.earliestEpochOrLowestSeries}</Col>}
            {this.state.ocurrence.latestEpochOrHighestSeries && <Col md={6} className="details-title">Época tardía o serie superior</Col>}
            {this.state.ocurrence.latestEpochOrHighestSeries && <Col md={6}>{this.state.ocurrence.latestEpochOrHighestSeries}</Col>}
            {this.state.ocurrence.earliestAgeOrLowestStage && <Col md={6} className="details-title">Edad temprana o piso inferior</Col>}
            {this.state.ocurrence.earliestAgeOrLowestStage && <Col md={6}>{this.state.ocurrence.earliestAgeOrLowestStage}</Col>}
            {this.state.ocurrence.latestAgeOrHighestStage && <Col md={6} className="details-title">Edad tardía o piso superior</Col>}
            {this.state.ocurrence.latestAgeOrHighestStage && <Col md={6}>{this.state.ocurrence.latestAgeOrHighestStage}</Col>}
            {this.state.ocurrence.lowestBiostratigraphicZone && <Col md={6} className="details-title">Zona bioestratigráfica inferior</Col>}
            {this.state.ocurrence.lowestBiostratigraphicZone && <Col md={6}>{this.state.ocurrence.lowestBiostratigraphicZone}</Col>}
            {this.state.ocurrence.highestBiostratigraphicZone && <Col md={6} className="details-title">Zona bioestratigráfica superior</Col>}
            {this.state.ocurrence.highestBiostratigraphicZone && <Col md={6}>{this.state.ocurrence.highestBiostratigraphicZone}</Col>}
            {this.state.ocurrence.lithostratigraphicTerms && <Col md={6} className="details-title">Términos litoestratigráficos</Col>}
            {this.state.ocurrence.lithostratigraphicTerms && <Col md={6}>{this.state.ocurrence.lithostratigraphicTerms}</Col>}
            {this.state.ocurrence.group && <Col md={6} className="details-title">Grupo</Col>}
            {this.state.ocurrence.group && <Col md={6}>{this.state.ocurrence.group}</Col>}
            {this.state.ocurrence.formation && <Col md={6} className="details-title">Formación</Col>}
            {this.state.ocurrence.formation && <Col md={6}>{this.state.ocurrence.formation}</Col>}
            {this.state.ocurrence.member && <Col md={6} className="details-title">Miembro</Col>}
            {this.state.ocurrence.member && <Col md={6}>{this.state.ocurrence.member}</Col>}
            {this.state.ocurrence.bed && <Col md={6} className="details-title">Capa</Col>}
            {this.state.ocurrence.bed && <Col md={6}>{this.state.ocurrence.bed}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default GeologicalContextSection
