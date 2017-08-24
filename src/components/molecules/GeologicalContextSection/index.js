import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .title-two {
    font-size: 24px;
    color: ${theme.palette.text[0]};
    margin-top: 60px;
  }
  .accent-title {
    margin-top: 20px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .more-details {
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleTwo.font};
    line-height: 28px;
    font-weight: ${theme.fonts.subTitleTwo.weight};
    padding: 20px;
    .details-title{
      font-weight: 600;
      margin-top: 1px;
      margin-bottom: 1px;
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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Contexto geológico</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.geologicalContextID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del contexto geológico</Col>}
            {this.state.ocurrence.geologicalContextID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.geologicalContextID}</Col>}
            {this.state.ocurrence.earliestEonOrLowestEonothem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Eón temprano o eonotema inferior</Col>}
            {this.state.ocurrence.earliestEonOrLowestEonothem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.earliestEonOrLowestEonothem}</Col>}
            {this.state.ocurrence.latestEonOrHighestEonothem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Eón tardío o eonotema superior</Col>}
            {this.state.ocurrence.latestEonOrHighestEonothem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.latestEonOrHighestEonothem}</Col>}
            {this.state.ocurrence.earliestEraOrLowestErathem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Era temprana o eratema inferior</Col>}
            {this.state.ocurrence.earliestEraOrLowestErathem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.earliestEraOrLowestErathem}</Col>}
            {this.state.ocurrence.latestEraOrHighestErathem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Era tardía o eratema superior</Col>}
            {this.state.ocurrence.latestEraOrHighestErathem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.latestEraOrHighestErathem}</Col>}
            {this.state.ocurrence.earliestPeriodOrLowestSystem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Periodo temprano o sistema inferior</Col>}
            {this.state.ocurrence.earliestPeriodOrLowestSystem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.earliestPeriodOrLowestSystem}</Col>}
            {this.state.ocurrence.latestPeriodOrHighestSystem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Periodo tardío o sistema superior</Col>}
            {this.state.ocurrence.latestPeriodOrHighestSystem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.latestPeriodOrHighestSystem}</Col>}
            {this.state.ocurrence.earliestEpochOrLowestSeries && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Época temprana o serie inferior</Col>}
            {this.state.ocurrence.earliestEpochOrLowestSeries && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.earliestEpochOrLowestSeries}</Col>}
            {this.state.ocurrence.latestEpochOrHighestSeries && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Época tardía o serie superior</Col>}
            {this.state.ocurrence.latestEpochOrHighestSeries && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.latestEpochOrHighestSeries}</Col>}
            {this.state.ocurrence.earliestAgeOrLowestStage && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Edad temprana o piso inferior</Col>}
            {this.state.ocurrence.earliestAgeOrLowestStage && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.earliestAgeOrLowestStage}</Col>}
            {this.state.ocurrence.latestAgeOrHighestStage && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Edad tardía o piso superior</Col>}
            {this.state.ocurrence.latestAgeOrHighestStage && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.latestAgeOrHighestStage}</Col>}
            {this.state.ocurrence.lowestBiostratigraphicZone && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Zona bioestratigráfica inferior</Col>}
            {this.state.ocurrence.lowestBiostratigraphicZone && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.lowestBiostratigraphicZone}</Col>}
            {this.state.ocurrence.highestBiostratigraphicZone && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Zona bioestratigráfica superior</Col>}
            {this.state.ocurrence.highestBiostratigraphicZone && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.highestBiostratigraphicZone}</Col>}
            {this.state.ocurrence.lithostratigraphicTerms && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Términos litoestratigráficos</Col>}
            {this.state.ocurrence.lithostratigraphicTerms && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.lithostratigraphicTerms}</Col>}
            {this.state.ocurrence.group && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Grupo</Col>}
            {this.state.ocurrence.group && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.group}</Col>}
            {this.state.ocurrence.formation && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Formación</Col>}
            {this.state.ocurrence.formation && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.formation}</Col>}
            {this.state.ocurrence.member && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Miembro</Col>}
            {this.state.ocurrence.member && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.member}</Col>}
            {this.state.ocurrence.bed && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Capa</Col>}
            {this.state.ocurrence.bed && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.bed}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default GeologicalContextSection
