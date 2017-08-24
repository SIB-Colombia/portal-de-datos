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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Recursos relacionados</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.resourceRelationship.resourceRelationshipID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de relación</Col>}
            {this.state.resourceRelationship.resourceRelationshipID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.resourceRelationshipID}</Col>}
            {this.state.resourceRelationship.resourceID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del recurso</Col>}
            {this.state.resourceRelationship.resourceID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.resourceID}</Col>}
            {this.state.resourceRelationship.relatedResourceID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del recurso relacionado</Col>}
            {this.state.resourceRelationship.relatedResourceID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.relatedResourceID}</Col>}
            {this.state.resourceRelationship.relationshipOfResource && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Relación de recursos</Col>}
            {this.state.resourceRelationship.relationshipOfResource && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.relationshipOfResource}</Col>}
            {this.state.resourceRelationship.relationshipAccordingTo && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Relación de acuerdo a</Col>}
            {this.state.resourceRelationship.relationshipAccordingTo && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.relationshipAccordingTo}</Col>}
            {this.state.resourceRelationship.relationshipEstablishedDate && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha de relación</Col>}
            {this.state.resourceRelationship.relationshipEstablishedDate && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.relationshipEstablishedDate}</Col>}
            {this.state.resourceRelationship.relationshipRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios</Col>}
            {this.state.resourceRelationship.relationshipRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.resourceRelationship.relationshipRemarks}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default RelatedResourcesSection
