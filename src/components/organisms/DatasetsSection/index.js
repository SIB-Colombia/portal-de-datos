import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'

const Wrapper = styled.div`
  .title {
    font-weight: 400;
    font-size: 18px;
    color: #4B5353;
    margin-top: 85px;
  }

  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }

  .sub-title{
    font-size: 36px;    
    margin: 20px;
    font-weight: 400;
  }

  .link {
    color: #008995;
    font-size: 18px;

    span {
      text-decoration: underline;
    }
  }
`

export default class DatasetsSection extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row center="xs">
            <Col className="title" xs={12} sm={12} md={12} lg={12}>RECURSO</Col>
            <Col className="accent-title" xs={2} sm={1} md={1} lg={1} />
          </Row>
          <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12} className="sub-title">Herbario Amazónico Colombiano</Col>
            <Col xs={12} sm={12} md={12} lg={12}><Link className="link">Publicado por <span>Instituto Amazónico de Investigaciones Cientificas Sinchi</span></Link></Col>
            <Col xs={12} sm={12} md={12} lg={12} className="">Martha Isabel Velljo Joyas . [email]Hernando Garcia</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
