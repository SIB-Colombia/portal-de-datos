import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'

const Wrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 100px;

    .titulo {
        font-weight: 200;
        font-size: 22px;
        text-align: center;
        color: #4B5353;
    }

    .accent-title {
        margin-top: 15px;
        border-top: 2px solid #ff7847;
    }

    .descripcion {
        width: 330px;
        text-align: center;
        color: #545859;
        font-size: 20px;
        font-weight: 200;
    }

    .color-hover {
        fill: red;
    }

`
export default class GeographicExplorerItem extends Component {

  static propTypes = {
    link: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      color: true,
    }
  }

  render() {
    return (
      <Col>
        <Wrapper>
          <Link to={this.props.link.to}>
            <Col md className="titulo">
              {this.props.link.titulo}
            </Col>
            <Col className="accent-title" mdOffset={4} md={4} />
            <Col md style={{ textAlign: 'center', padding: 30 }} onMouseEnter={() => this.setState({ color: !this.state.color })} onMouseLeave={() => this.setState({ color: !this.state.color })}>
              <img src={this.state.color ? this.props.link.img : this.props.link.imgC} alt="" width="60%" className="color-hover" />
            </Col>
            <Col md className="descripcion">
              <i>{this.props.link.descripcion}</i>
            </Col>
          </Link>
        </Wrapper>
      </Col>
    )
  }
}
