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
    evento: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      evento: [],
    }
  }

  componentWillMount() {
    this.setState({
      evento: this.props.evento,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Evento</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            <Col md={6} className="details-title">Día</Col>
            <Col md={6}>{(this.state.evento.fechaEvento).substr(8, 2)}</Col>
            <Col md={6} className="details-title">Mes</Col>
            <Col md={6}>{(this.state.evento.fechaEvento).substr(5, 2)}</Col>
            <Col md={6} className="details-title">Año</Col>
            <Col md={6}>{(this.state.evento.fechaEvento).substr(0, 4)}</Col>
            <Col md={6} className="details-title">Fecha del evento</Col>
            <Col md={6}>{this.state.evento.fechaEvento.slice(0, 10)}</Col>
            <Col md={6} className="details-title">ID del evento</Col>
            <Col md={6}>{this.state.evento.id}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default EventSection
