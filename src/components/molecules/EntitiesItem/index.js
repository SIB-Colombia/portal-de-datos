import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

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
  render() {
    return (
      <Wrapper>
        <Row className="entidad-item">
          <Col md={3}>
            <img src="/logo_entidad.png" alt="" width="100%" />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12} className="entidad-title">Nombre de la entidad si es muy larguisimo se corta con puntos susp</Col>
              <Col md={12} className="entidad-descripcion">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis beatae suscipit assumenda explicabo iure! Sunt laboriosam perspiciatis molestiae ad quibusdam esse cupiditate expedita, animi sequi dicta quidem eos odit adipisci?
                  </Col>
              <Col className="entidad-divider" md={12} />
              <Col md={12}>
                <Row className="informacion-relevante">
                  <Col md>DEPARTAMENTO</Col>
                  <Col md>
                    <Row>
                      <Col md><span>900.000</span> REGISTROS</Col>
                      <Col md><span>900.000</span> RECURSOS</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col className="entidad-divider" md={12} />
      </Wrapper>
    )
  }
}
