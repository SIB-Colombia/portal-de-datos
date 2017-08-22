import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import theme from '../../themes/default'

const Wrapper = styled.div`
  margin-top: 70px;

  .titulo {
    font-weight: ${theme.fonts.subTitleTwo.weight};
    font-size: ${theme.fonts.subTitleTwo.font};
    color: ${theme.palette.text[0]};
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .descripcion {
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
  }

  img {
    padding-top: 30px;
    padding-bottom: 30px;
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
      <Col xs={12} sm={6} md={4} lg>
        <Wrapper>
          <Link to={this.props.link.to}>
            <Row center="xs">
              <Col xs={12} sm={12} md={12} lg={12} className="titulo">
                {this.props.link.titulo}
              </Col>
              <Col className="accent-title" xs={4} sm={4} md={4} lg={4} />
              <Col xs={12} sm={12} md={12} lg={12} onMouseEnter={() => this.setState({ color: !this.state.color })} onMouseLeave={() => this.setState({ color: !this.state.color })}>
                <img src={this.state.color ? this.props.link.img : this.props.link.imgC} alt="" width="60%" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="descripcion">
                <i>{this.props.link.descripcion}</i>
              </Col>
            </Row>
          </Link>
        </Wrapper>
      </Col>
    )
  }
}
