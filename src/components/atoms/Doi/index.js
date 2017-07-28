import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
  background: #00AAB9;
  margin: 5px 0px;
  .doi {
    color: white; 
    font-weight: 600;
    padding-left: 16px;
    padding-top: 3px;
    padding-bottom: 3px;    
  }

  .url{
    background: white;
    margin: 2px;
    margin-right: 10px;    
    color: #4B5353;
  }
`

export default class Doi extends Component {

  static propTypes = {
    doi: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <a href={`https://www.google.com.co/search?q=${this.props.doi}`} target="_blank" rel="noopener noreferrer">
          <Row start="md">
            <Col md={2} className="doi">DOI</Col>
            <Col md className="url">{this.props.doi.slice(4)}</Col>
          </Row>
        </a>
      </Wrapper>
    )
  }
}
