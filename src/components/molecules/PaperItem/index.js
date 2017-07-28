import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import { Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
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

export default class PaperItem extends Component {

  static propTypes = {
    title: PropTypes.any,
    children: PropTypes.any,
    map: PropTypes.any,
  }

  render() {
    return (
      <Wrapper>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Paper className="normal-info">
            <Row>
              <Col className="title-two" xs={12} sm={12} md={12} lg={12}>{this.props.title}</Col>
              <Col className="accent-title" xs={2} sm={2} md={2} />
            </Row>
            <Row>
              <Col className="description" xs={12} sm={12} md={12} lg={12}>
                {this.props.children}
              </Col>
            </Row>
          </Paper>
        </Col>
      </Wrapper>
    )
  }
}