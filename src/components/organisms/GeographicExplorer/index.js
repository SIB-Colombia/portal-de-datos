import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { GeographicExplorerItem } from 'components'

const Wrapper = styled.div`
  margin-top: 85px;
  .title {
    font-weight: 400;
    font-size: 30px;
    padding-left: 30px;
    color: #4B5353;
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid #ff7847;
  }
`

export default class GeographicExplorer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          titulo: 'DEPARTAMENTOS',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'REGIONES',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'ECOSISTEMAS',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'ÁREAS PROTEGIDAS',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'CARS',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
      ],
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col className="title" md={12}>Explorador geográfico</Col>
            <Col className="accent-title" md={1} />
          </Row>
        </Grid>
        <Grid fluid>
          <Row around="xs">
            {this.state.links.map((link, i) => (
              <GeographicExplorerItem key={i} link={link} />
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
