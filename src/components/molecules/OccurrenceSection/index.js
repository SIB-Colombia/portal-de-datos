import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'

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

class OccurrenceSection extends React.Component {

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
        <Col className="title-two" md={12}>Ocurrence</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            <Col md={6} className="details-title">Associated References</Col>
            <Col md={6}><Link>{this.state.ocurrence.associatedReferences}</Link></Col>
            <Col md={6} className="details-title">Número de catálogo</Col>
            <Col md={6}>{this.state.ocurrence.numeroCatalogo}</Col>
            <Col md={6} className="details-title">Conteo individual</Col>
            <Col md={6}>{this.state.ocurrence.conteoIndividual}</Col>
            <Col md={6} className="details-title">Registrado por</Col>
            <Col md={6}>{this.state.ocurrence.registradoPor}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default OccurrenceSection