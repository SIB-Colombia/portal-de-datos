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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Organismo</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.organismQuantity && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Cantidad del Organismo</Col>}
            {this.state.ocurrence.organismQuantity && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismQuantity}</Col>}
            {this.state.ocurrence.organismQuantityType && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Tipo de Cantidad del Organismo</Col>}
            {this.state.ocurrence.organismQuantityType && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismQuantityType}</Col>}
            {this.state.ocurrence.organismName && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Nombre del organismo</Col>}
            {this.state.ocurrence.organismName && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismName}</Col>}
            {this.state.ocurrence.organismScope && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Alcance del organismo</Col>}
            {this.state.ocurrence.organismScope && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismScope}</Col>}
            {this.state.ocurrence.associatedOrganisms && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Organismos asociados</Col>}
            {this.state.ocurrence.associatedOrganisms && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedOrganisms}</Col>}
            {this.state.ocurrence.organismRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios del organismo</Col>}
            {this.state.ocurrence.organismRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismRemarks}</Col>}
            {this.state.ocurrence.previousIdentifications && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Identificaciones previas</Col>}
            {this.state.ocurrence.previousIdentifications && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.previousIdentifications}</Col>}
            {this.state.ocurrence.associatedOccurrences && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Registros biológicos asociados</Col>}
            {this.state.ocurrence.associatedOccurrences && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedOccurrences}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default OrganismSection
