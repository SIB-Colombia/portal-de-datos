import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

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
        <Col className="title-two" md={12}>Evento</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.eventID && <Col md={6} className="details-title">ID del evento</Col>}
            {this.state.ocurrence.eventID && <Col md={6}>{this.state.ocurrence.eventID}</Col>}
            {this.state.ocurrence.parentEventID && <Col md={6} className="details-title">ID del evento parental</Col>}
            {this.state.ocurrence.parentEventID && <Col md={6}>{this.state.ocurrence.parentEventID}</Col>}
            {this.state.ocurrence.samplingProtocol && <Col md={6} className="details-title">Protocolo de muestreo</Col>}
            {this.state.ocurrence.samplingProtocol && <Col md={6}>{this.state.ocurrence.samplingProtocol}</Col>}
            {this.state.ocurrence.sampleSizeValue && <Col md={6} className="details-title">Tamaño de la muestra</Col>}
            {this.state.ocurrence.sampleSizeValue && <Col md={6}>{this.state.ocurrence.sampleSizeValue}</Col>}
            {this.state.ocurrence.sampleSizeUnit && <Col md={6} className="details-title">Unidad del tamaño</Col>}
            {this.state.ocurrence.sampleSizeUnit && <Col md={6}>{this.state.ocurrence.sampleSizeUnit}</Col>}
            {this.state.ocurrence.samplingEffort && <Col md={6} className="details-title">Esfuerzo de muestreo</Col>}
            {this.state.ocurrence.samplingEffort && <Col md={6}>{this.state.ocurrence.samplingEffort}</Col>}
            {this.state.ocurrence.eventDate && <Col md={6} className="details-title">Fecha del evento</Col>}
            {this.state.ocurrence.eventDate && <Col md={6}>{this.state.ocurrence.eventDate}</Col>}
            {this.state.ocurrence.eventTime && <Col md={6} className="details-title">Hora del evento</Col>}
            {this.state.ocurrence.eventTime && <Col md={6}>{this.state.ocurrence.eventTime}</Col>}
            {this.state.ocurrence.startDayOfYear && <Col md={6} className="details-title">Día inicial del año</Col>}
            {this.state.ocurrence.startDayOfYear && <Col md={6}>{this.state.ocurrence.startDayOfYear}</Col>}
            {this.state.ocurrence.endDayOfYear && <Col md={6} className="details-title">Día final del año</Col>}
            {this.state.ocurrence.endDayOfYear && <Col md={6}>{this.state.ocurrence.endDayOfYear}</Col>}
            {this.state.ocurrence.year && <Col md={6} className="details-title">Año</Col>}
            {this.state.ocurrence.year && <Col md={6}>{this.state.ocurrence.year}</Col>}
            {this.state.ocurrence.month && <Col md={6} className="details-title">Mes</Col>}
            {this.state.ocurrence.month && <Col md={6}>{this.state.ocurrence.month}</Col>}
            {this.state.ocurrence.day && <Col md={6} className="details-title">Día</Col>}
            {this.state.ocurrence.day && <Col md={6}>{this.state.ocurrence.day}</Col>}
            {this.state.ocurrence.verbatimEventDate && <Col md={6} className="details-title">Fecha original del evento</Col>}
            {this.state.ocurrence.verbatimEventDate && <Col md={6}>{this.state.ocurrence.verbatimEventDate}</Col>}
            {this.state.ocurrence.habitat && <Col md={6} className="details-title">Hábitat</Col>}
            {this.state.ocurrence.habitat && <Col md={6}>{this.state.ocurrence.habitat}</Col>}
            {this.state.ocurrence.fieldNumber && <Col md={6} className="details-title">Número de campo</Col>}
            {this.state.ocurrence.fieldNumber && <Col md={6}>{this.state.ocurrence.fieldNumber}</Col>}
            {this.state.ocurrence.fieldNotes && <Col md={6} className="details-title">Notas de campo</Col>}
            {this.state.ocurrence.fieldNotes && <Col md={6}>{this.state.ocurrence.fieldNotes}</Col>}
            {this.state.ocurrence.eventRemarks && <Col md={6} className="details-title">Comentarios del evento</Col>}
            {this.state.ocurrence.eventRemarks && <Col md={6}>{this.state.ocurrence.eventRemarks}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default EventSection
