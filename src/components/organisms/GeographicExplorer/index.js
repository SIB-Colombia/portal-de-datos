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
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-23.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-18.svg',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'REGIONES',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-24.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-19.svg',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'ECOSISTEMAS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-25.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-20.svg',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'ÁREAS PROTEGIDAS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-26.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-21.svg',
          descripcion: 'Explora los datos disponibles por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'CARS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-27.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-22.svg',
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
