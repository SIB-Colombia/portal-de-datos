import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'

const Wrapper = styled.div`
  .contact-title{
      font-weight: 600;
      margin: 10px;
  }
  .box{
    border-left: 1px solid rgb(224, 224, 224);
    margin-left: 15px;
    padding-left: 20px;
    line-height: 35px;
  }

  a{
    color: #10AFBD;
  }
`

export default class ContactItem extends Component {
  static propTypes = {
    contact: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    /*
                {this.props.contact.map((data, i) => (
                  <Col xs={12} sm={12} md={12} lg={12} key={i}>{data}</Col>
                ))}
    */
    console.log("Datos de contacto", this.props)
    return (
      <Col xs={12} sm={12} md={6} lg={6}>
        <Wrapper>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="contact-title">{this.props.contact.lastName}</Col>
            <Col xs={12} sm={12} md={12} lg={12} className="box">
              <Row>
              </Row>
            </Col>
          </Row>
        </Wrapper>
      </Col>
    )
  }
}
