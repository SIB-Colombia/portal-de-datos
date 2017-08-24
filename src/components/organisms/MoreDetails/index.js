import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  RegisterSection,
  LocationSection,
  EventSection,
  TaxonSection,
  RegistrationElementSection,
  IDSection,
  OrganismSection,
  SampleSection,
  MeasuresFactsSection,
  RelatedResourcesSection,
  MultimediaSection,
  GeologicalContextSection,
} from 'components'

const Wrapper = styled.div`
  background-color: #ffffff;
`

class MoreDetails extends React.Component {

  static propTypes = {
    more: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      detail: [],
    }
  }

  componentWillMount() {
    this.setState({
      detail: this.props.more,
    })
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  {this.state.detail.occurrence && <RegisterSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <EventSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <TaxonSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <OrganismSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.measurementOrFact && <MeasuresFactsSection measurementOrFact={this.state.detail.measurementOrFact} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.resourceRelationship && <RelatedResourcesSection resourceRelationship={this.state.detail.resourceRelationship} />}
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  {this.state.detail.occurrence && <RegistrationElementSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <LocationSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <IDSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <SampleSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.occurrence && <GeologicalContextSection ocurrence={this.state.detail.occurrence} />}
                </Col>
                <Col md={12}>
                  {this.state.detail.multimedia && <MultimediaSection multimedia={this.state.detail.multimedia} />}
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default MoreDetails
