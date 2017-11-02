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
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 150px;
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
    console.log(this.props.dataset)
    return (
      <Wrapper>
        <Link to={`/dataset/${this.props.dataset.key}`}>
          <Row className="entidad-item">
            <Col md={3}>
              <img src={this.props.dataset.imageUrl} alt="" width="100%" />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
              <Row>
                <Col md={12} className="entidad-title">{this.props.dataset.title}</Col>
                <Col md={12} className="entidad-descripcion">
                  {this.props.dataset.description}
                </Col>
                <Col className="entidad-divider" md={12} />
                <Col md={12}>
                  <Row className="informacion-relevante" middle="xs">
                    <Col md={6}>PUBLICADOR</Col>
                    <Col md={6}>
                      <Row>
                        <Col md><span>{this.props.dataset.recordCount}</span> REGISTROS</Col>
                      </Row>
                    </Col>
                    <Col md={6}>{this.props.dataset.publishingOrganizationTitle}</Col>
                    <Col md={6}><License id={this.props.dataset.license} /></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Link>
        <Col className="entidad-divider" md={12} />
      </Wrapper>
    )
  }
}
