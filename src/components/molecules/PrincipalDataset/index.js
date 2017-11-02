import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { License, Link, Doi } from 'components'


const Wrapper = styled.div`
  margin-bottom: 20px;
  .more-datails{
    margin-top: 30px;

    .description {
      padding: 20px;
      line-height: 35px;
    }

    .hiper-link{
      font-weight: 400;
      color: #10AFBD;
    }

    .direct-links {
      line-height: 40px;
      font-weight: 600;
      padding: 10px;
      margin-bottom: 50px;

      span {
        font-weight: 200;
      }

      a{
        margin-left: 15px;
        color: #10AFBD;
      }
    }
  }
`
export default class PrincipalDataset extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eml: null,
    }
  }

  componentWillMount() {
    this.setState({
      eml: this.props.eml,
    })
  }

  render() {
    return (
      <Wrapper>
        <Grid className="more-datails">
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Row center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <img src={this.state.eml.logoUrl} alt="" width="261" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Doi doi={this.state.eml.doi} />
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                <Col className="description" xs={12} sm={12} md={12} lg={12}>
                  {this.state.eml.description}
                </Col>
              </Row>
              <Row className="direct-links">
                <Col xs={12} sm={12} md={12} lg={12}>Última modificación: <span>{this.state.eml.modified}</span></Col>
                <Col xs={12} sm={12} md={12} lg={12}>Licencia <License id={this.state.eml.license}></License></Col>
                <Col xs={12} sm={12} md={12} lg={12}>Cómo citar {this.state.eml.citation.text}</Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
