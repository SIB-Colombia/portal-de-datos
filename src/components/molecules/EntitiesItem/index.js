import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { Link } from 'components'

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

export default class EntitiesItem extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    entitie: PropTypes.any.isRequired,
  }

  render() {
    return (
      <Wrapper>
        <Link to={`provider/${this.props.entitie.id}`}>
          <Row className="entidad-item">
            <Col md={3}>
              <img src={this.props.entitie.eml.additionalMetadata.metadata.gbif.resourceLogoUrl} alt="" width="100%" />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={12} className="entidad-title">{this.props.entitie.eml.providerName}</Col>
                <Col md={12} className="entidad-descripcion">
                  {this.props.entitie.eml.dataset.organization.description}
                </Col>
                <Col className="entidad-divider" md={12} />
                <Col md={12}>
                  <Row className="informacion-relevante">
                    <Col md>{this.props.entitie.eml.dataset.organization.city}</Col>
                    <Col md>
                      <Row>
                        <Col md><span>{this.props.entitie.eml.occurrence.count.providerName}</span> REGISTROS</Col>
                        <Col md><span>{this.props.entitie.eml.occurrence.count.resourceName}</span> RECURSOS</Col>
                      </Row>
                    </Col>
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
