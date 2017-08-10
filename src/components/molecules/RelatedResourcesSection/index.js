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

class RelatedResourcesSection extends React.Component {

  static propTypes = {
    resourceRelationship: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      resourceRelationship: [],
    }
  }

  componentWillMount() {
    this.setState({
      resourceRelationship: this.props.resourceRelationship,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Recursos relacionados</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.resourceRelationship.resourceRelationshipID && <Col md={6} className="details-title">ID de relación</Col>}
            {this.state.resourceRelationship.resourceRelationshipID && <Col md={6}>{this.state.resourceRelationship.resourceRelationshipID}</Col>}
            {this.state.resourceRelationship.resourceID && <Col md={6} className="details-title">ID del recurso</Col>}
            {this.state.resourceRelationship.resourceID && <Col md={6}>{this.state.resourceRelationship.resourceID}</Col>}
            {this.state.resourceRelationship.relatedResourceID && <Col md={6} className="details-title">ID del recurso relacionado</Col>}
            {this.state.resourceRelationship.relatedResourceID && <Col md={6}>{this.state.resourceRelationship.relatedResourceID}</Col>}
            {this.state.resourceRelationship.relationshipOfResource && <Col md={6} className="details-title">Relación de recursos</Col>}
            {this.state.resourceRelationship.relationshipOfResource && <Col md={6}>{this.state.resourceRelationship.relationshipOfResource}</Col>}
            {this.state.resourceRelationship.relationshipAccordingTo && <Col md={6} className="details-title">Relación de acuerdo a</Col>}
            {this.state.resourceRelationship.relationshipAccordingTo && <Col md={6}>{this.state.resourceRelationship.relationshipAccordingTo}</Col>}
            {this.state.resourceRelationship.relationshipEstablishedDate && <Col md={6} className="details-title">Fecha de relación</Col>}
            {this.state.resourceRelationship.relationshipEstablishedDate && <Col md={6}>{this.state.resourceRelationship.relationshipEstablishedDate}</Col>}
            {this.state.resourceRelationship.relationshipRemarks && <Col md={6} className="details-title">Comentarios</Col>}
            {this.state.resourceRelationship.relationshipRemarks && <Col md={6}>{this.state.resourceRelationship.relationshipRemarks}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default RelatedResourcesSection
