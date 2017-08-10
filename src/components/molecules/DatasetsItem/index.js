import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Link, Doi, License } from 'components'

const Wrapper = styled.div`

  .entidad-item {
    padding: 20px 60px;
    font-weight: 200;
    color: #77A7B6;

    .entidad-title{
      margin-top: 20px;
      font-size: 26px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .entidad-descripcion {
      line-height: 35px;
      font-size: 18px;
      color: #4B5353;
      margin: 15px 0px;
    }

    .informacion-relevante{
      padding: 10px 0px;
      font-size: 18px;
      font-weight: 400;

      span {
        font-weight: 600;
      }
    }
  }
`

export default class DatasetsItem extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    dataset: PropTypes.any.isRequired,
  }

  render() {
    return (
      <Wrapper>
        <Link to={`datasets/${this.props.dataset.resourceId}`}>
          <Row className="entidad-item">
            <Col md={3}>
              <img src={this.props.dataset.imageUrl} alt="" width="100%" />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
              <Row>
                <Col md={12} className="entidad-title">{this.props.dataset.resourceName}</Col>
                <Col md={12} className="entidad-descripcion">
                  {this.props.dataset.description}
                </Col>
                <Col className="entidad-divider" md={12} />
                <Col md={12}>
                  <Row className="informacion-relevante" middle="xs">
                    <Col md={6}>PUBLICADOR</Col>
                    <Col md={6}>
                      <Row>
                        <Col md><span>{this.props.dataset.count}</span> REGISTROS</Col>
                      </Row>
                    </Col>
                    <Col md={6}><Doi doi="doi:10.15472/ch49b6" /></Col>
                    <Col md={6}><License id="by" /></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Col className="entidad-divider" md={12} />
        </Link>
      </Wrapper>
    )
  }
}
