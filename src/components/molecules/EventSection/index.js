import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
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

class EventSection extends React.Component {

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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Evento</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.eventID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del evento</Col>}
            {this.state.ocurrence.eventID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.eventID}</Col>}
            {this.state.ocurrence.parentEventID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del evento parental</Col>}
            {this.state.ocurrence.parentEventID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.parentEventID}</Col>}
            {this.state.ocurrence.samplingProtocol && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Protocolo de muestreo</Col>}
            {this.state.ocurrence.samplingProtocol && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.samplingProtocol}</Col>}
            {this.state.ocurrence.sampleSizeValue && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Tamaño de la muestra</Col>}
            {this.state.ocurrence.sampleSizeValue && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.sampleSizeValue}</Col>}
            {this.state.ocurrence.sampleSizeUnit && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Unidad del tamaño</Col>}
            {this.state.ocurrence.sampleSizeUnit && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.sampleSizeUnit}</Col>}
            {this.state.ocurrence.samplingEffort && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Esfuerzo de muestreo</Col>}
            {this.state.ocurrence.samplingEffort && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.samplingEffort}</Col>}
            {this.state.ocurrence.eventDate && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha del evento</Col>}
            {this.state.ocurrence.eventDate && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.eventDate}</Col>}
            {this.state.ocurrence.eventTime && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Hora del evento</Col>}
            {this.state.ocurrence.eventTime && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.eventTime}</Col>}
            {this.state.ocurrence.startDayOfYear && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Día inicial del año</Col>}
            {this.state.ocurrence.startDayOfYear && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.startDayOfYear}</Col>}
            {this.state.ocurrence.endDayOfYear && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Día final del año</Col>}
            {this.state.ocurrence.endDayOfYear && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.endDayOfYear}</Col>}
            {this.state.ocurrence.year && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Año</Col>}
            {this.state.ocurrence.year && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.year}</Col>}
            {this.state.ocurrence.month && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Mes</Col>}
            {this.state.ocurrence.month && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.month}</Col>}
            {this.state.ocurrence.day && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Día</Col>}
            {this.state.ocurrence.day && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.day}</Col>}
            {this.state.ocurrence.verbatimEventDate && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha original del evento</Col>}
            {this.state.ocurrence.verbatimEventDate && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimEventDate}</Col>}
            {this.state.ocurrence.habitat && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Hábitat</Col>}
            {this.state.ocurrence.habitat && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.habitat}</Col>}
            {this.state.ocurrence.fieldNumber && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Número de campo</Col>}
            {this.state.ocurrence.fieldNumber && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.fieldNumber}</Col>}
            {this.state.ocurrence.fieldNotes && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Notas de campo</Col>}
            {this.state.ocurrence.fieldNotes && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.fieldNotes}</Col>}
            {this.state.ocurrence.eventRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios del evento</Col>}
            {this.state.ocurrence.eventRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.eventRemarks}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default EventSection
