import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import Email from 'material-ui/svg-icons/communication/email'

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
    font-size: 19px;
    span {
      text-decoration: underline;
    }
  }
`

export default class DatasetsSection extends Component {
  static propTypes = {
    eml: PropTypes.any,
  }

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
        <Grid>
          <Row center="xs">
            <Col className="title" xs={12} sm={12} md={12} lg={12}>RECURSO</Col>
            <Col className="accent-title" xs={2} sm={1} md={1} lg={1} />
          </Row>
          <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12} className="sub-title">{this.state.eml.resourceName}</Col>
            <Col xs={12} sm={12} md={12} lg={12} style={{ marginBottom: 10 }}><Link className="link">Publicado por <span>{this.state.eml.providerName}</span></Link></Col>
            <Col xs={12} sm={12} md={12} lg={12} className="">Martha Isabel Vallejo Joyas · <Email style={{ color: '#4B5353' }} viewBox="-8 5 30 1" />   Hernando Garcia</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
