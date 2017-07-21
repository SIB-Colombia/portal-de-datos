import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  RegisterSection,
  OccurrenceSection,
  LocationSection,
  EventSection,
  TaxonSection,
  Link,
} from 'components'

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 50px 0px;
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

class MoreDetails extends React.Component {

  static propTypes = {
    detail: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      detail: [],
    }
  }

  componentWillMount() {
    this.setState({
      detail: this.props.detail,
    })
  }

  render() {
    return (
      <Wrapper>
        <Grid >
          <Row>
            <Col md={6}>
              <RegisterSection registro={this.state.detail.registro} recurso={this.state.detail.recurso} />
            </Col>
            <Col md={6}>
              <OccurrenceSection ocurrence={this.state.detail.occurrence} />
            </Col>
            <Col md={6}>
              <EventSection evento={this.state.detail.evento} />
            </Col>
            <Col md={6}>
              <TaxonSection taxon={this.state.detail.taxon} />
            </Col>
            <Col md={6}>
              <LocationSection ubicacion={this.state.detail.ubicacion} />
            </Col>
            <Col md={6}>
              <Col className="title-two" md={12}>Otros</Col>
              <Col className="accent-title" md={11} />
              <Grid fluid>
                <Row className="more-details">
                  <Col md={4} className="details-title">Lincencia</Col>
                  <Col md={6}><Link>{this.state.detail.licencia}</Link></Col>
                  <Col md={4} className="details-title">Motificado</Col>
                  <Col md={8}>{this.state.detail.modificado}</Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default MoreDetails
