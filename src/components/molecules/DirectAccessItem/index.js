import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import theme from '../../themes/default'

const Wrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  color: ${theme.palette.text[0]};
  .titulo {
    font-weight: ${theme.fonts.titleOne.weight};
    font-size: ${theme.fonts.titleOne.font};
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .descripcion {
    font-size: ${theme.fonts.subTitleOne.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    padding-left: 30px;
    padding-right: 30px;
  }

  img {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export default class DirectAccessItem extends Component {

  static propTypes = {
    link: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={4}>
        <Wrapper>
          <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12} className="titulo">
              {this.props.link.titulo}
            </Col>
            <Col className="accent-title"xs={3} sm={3} md={3} lg={3} />
            <Col xs={12} sm={12} md={12} lg={12}>
              <img src={this.props.link.img} alt="" width="130" />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="descripcion">
              <i>{this.props.link.descripcion}</i>
            </Col>
          </Row>
        </Wrapper>
      </Col>
    )
  }
}
