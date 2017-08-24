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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Identificación</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.identificationID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de la identificación</Col>}
            {this.state.ocurrence.identificationID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identificationID}</Col>}
            {this.state.ocurrence.identifiedBy && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Identificado por</Col>}
            {this.state.ocurrence.identifiedBy && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identifiedBy}</Col>}
            {this.state.ocurrence.dateIdentified && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha de identificación</Col>}
            {this.state.ocurrence.dateIdentified && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.dateIdentified}</Col>}
            {this.state.ocurrence.identificationReferences && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Referencias de la identificación</Col>}
            {this.state.ocurrence.identificationReferences && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identificationReferences}</Col>}
            {this.state.ocurrence.identificationVerificationStatus && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Estado de la verificación de la identificación</Col>}
            {this.state.ocurrence.identificationVerificationStatus && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identificationVerificationStatus}</Col>}
            {this.state.ocurrence.identificationRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios de la Identificación</Col>}
            {this.state.ocurrence.identificationRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identificationRemarks}</Col>}
            {this.state.ocurrence.identificationQualifier && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Calificador de la identificación</Col>}
            {this.state.ocurrence.identificationQualifier && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.identificationQualifier}</Col>}
            {this.state.ocurrence.typeStatus && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Estado del tipo</Col>}
            {this.state.ocurrence.typeStatus && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.typeStatus}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default IDSection
