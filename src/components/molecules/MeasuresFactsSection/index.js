import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
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

class MeasuresFactsSection extends React.Component {

  static propTypes = {
    measurementOrFact: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      measurementOrFact: [],
    }
  }

  componentWillMount() {
    this.setState({
      measurementOrFact: this.props.measurementOrFact,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Medidas o hechos</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.measurementOrFact.measurementID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Identificador</Col>}
            {this.state.measurementOrFact.measurementID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementID}</Col>}
            {this.state.measurementOrFact.measurementType && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Tipo</Col>}
            {this.state.measurementOrFact.measurementType && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementType}</Col>}
            {this.state.measurementOrFact.measurementValue && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Valor</Col>}
            {this.state.measurementOrFact.measurementValue && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementValue}</Col>}
            {this.state.measurementOrFact.measurementAccuracy && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Precisión</Col>}
            {this.state.measurementOrFact.measurementAccuracy && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementAccuracy}</Col>}
            {this.state.measurementOrFact.measurementUnit && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Unidad de medida</Col>}
            {this.state.measurementOrFact.measurementUnit && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementUnit}</Col>}
            {this.state.measurementOrFact.measurementDeterminedBy && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Determinado por</Col>}
            {this.state.measurementOrFact.measurementDeterminedBy && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementDeterminedBy}</Col>}
            {this.state.measurementOrFact.measurementDeterminedDate && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha</Col>}
            {this.state.measurementOrFact.measurementDeterminedDate && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementDeterminedDate}</Col>}
            {this.state.measurementOrFact.measurementMethod && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Método</Col>}
            {this.state.measurementOrFact.measurementMethod && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementMethod}</Col>}
            {this.state.measurementOrFact.measurementRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios</Col>}
            {this.state.measurementOrFact.measurementRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.measurementOrFact.measurementRemarks}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default MeasuresFactsSection
