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

class OrganismSection extends React.Component {

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
            {this.state.ocurrence.organismQuantity && <Col md={6} className="details-title">Cantidad del Organismo</Col>}
            {this.state.ocurrence.organismQuantity && <Col md={6}>{this.state.ocurrence.organismQuantity}</Col>}
            {this.state.ocurrence.organismQuantityType && <Col md={6} className="details-title">Tipo de Cantidad del Organismo</Col>}
            {this.state.ocurrence.organismQuantityType && <Col md={6}>{this.state.ocurrence.organismQuantityType}</Col>}
            {this.state.ocurrence.organismName && <Col md={6} className="details-title">Nombre del organismo</Col>}
            {this.state.ocurrence.organismName && <Col md={6}>{this.state.ocurrence.organismName}</Col>}
            {this.state.ocurrence.organismScope && <Col md={6} className="details-title">Alcance del organismo</Col>}
            {this.state.ocurrence.organismScope && <Col md={6}>{this.state.ocurrence.organismScope}</Col>}
            {this.state.ocurrence.associatedOrganisms && <Col md={6} className="details-title">Organismos asociados</Col>}
            {this.state.ocurrence.associatedOrganisms && <Col md={6}>{this.state.ocurrence.associatedOrganisms}</Col>}
            {this.state.ocurrence.organismRemarks && <Col md={6} className="details-title">Comentarios del organismo</Col>}
            {this.state.ocurrence.organismRemarks && <Col md={6}>{this.state.ocurrence.organismRemarks}</Col>}
            {this.state.ocurrence.previousIdentifications && <Col md={6} className="details-title">Identificaciones previas</Col>}
            {this.state.ocurrence.previousIdentifications && <Col md={6}>{this.state.ocurrence.previousIdentifications}</Col>}
            {this.state.ocurrence.associatedOccurrences && <Col md={6} className="details-title">Registros biológicos asociados</Col>}
            {this.state.ocurrence.associatedOccurrences && <Col md={6}>{this.state.ocurrence.associatedOccurrences}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default OrganismSection
