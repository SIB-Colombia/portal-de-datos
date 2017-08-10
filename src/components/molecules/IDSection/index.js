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

class IDSection extends React.Component {

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
        <Col className="title-two" md={12}>Identificación</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.identificationID && <Col md={6} className="details-title">ID de la identificación</Col>}
            {this.state.ocurrence.identificationID && <Col md={6}>{this.state.ocurrence.identificationID}</Col>}
            {this.state.ocurrence.identifiedBy && <Col md={6} className="details-title">Identificado por</Col>}
            {this.state.ocurrence.identifiedBy && <Col md={6}>{this.state.ocurrence.identifiedBy}</Col>}
            {this.state.ocurrence.dateIdentified && <Col md={6} className="details-title">Fecha de identificación</Col>}
            {this.state.ocurrence.dateIdentified && <Col md={6}>{this.state.ocurrence.dateIdentified}</Col>}
            {this.state.ocurrence.identificationReferences && <Col md={6} className="details-title">Referencias de la identificación</Col>}
            {this.state.ocurrence.identificationReferences && <Col md={6}>{this.state.ocurrence.identificationReferences}</Col>}
            {this.state.ocurrence.identificationVerificationStatus && <Col md={6} className="details-title">Estado de la verificación de la identificación</Col>}
            {this.state.ocurrence.identificationVerificationStatus && <Col md={6}>{this.state.ocurrence.identificationVerificationStatus}</Col>}
            {this.state.ocurrence.identificationRemarks && <Col md={6} className="details-title">Comentarios de la Identificación</Col>}
            {this.state.ocurrence.identificationRemarks && <Col md={6}>{this.state.ocurrence.identificationRemarks}</Col>}
            {this.state.ocurrence.identificationQualifier && <Col md={6} className="details-title">Calificador de la identificación</Col>}
            {this.state.ocurrence.identificationQualifier && <Col md={6}>{this.state.ocurrence.identificationQualifier}</Col>}
            {this.state.ocurrence.typeStatus && <Col md={6} className="details-title">Estado del tipo</Col>}
            {this.state.ocurrence.typeStatus && <Col md={6}>{this.state.ocurrence.typeStatus}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default IDSection
