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
import Masonry from 'react-masonry-component'

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
            <Col md={6}>
              <Row>
                <Col md={12}>
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
            <Col md={6}>
              <Row>
                <Col md={12}>
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
