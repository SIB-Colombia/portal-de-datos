import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import _ from 'lodash'

const Wrapper = styled.div`
  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .normal-info {
    padding: 30px;
    margin-bottom: 20px;

    .description {
      padding: 20px;
      line-height: 35px;
      font-weight: 200;
    }
  }
`


export default class TaxonomicCoverageSection extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Col className="third-title" xs={12} sm={12} md={12} lg={12}>Genéro</Col>
          {_.map([0, 1, 2, 3, 4], (key) => (
            <Col xs={6} sm={4} md={4} lg={4} key={key}>
              <Link className="link">Lorem ipsum</Link>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="third-title" xs={12} sm={12} md={12} lg={12}>Especie</Col>
          {_.map([0, 1, 2, 3, 4], (key) => (
            <Col xs={6} sm={4} md={4} lg={4} key={key}>
              <Link className="link">Lorem ipsum</Link>
            </Col>
          ))}
        </Row>
      </Wrapper>
    )
  }
}
