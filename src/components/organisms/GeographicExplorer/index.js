import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { GeographicExplorerItem } from 'components'
import theme from '../../themes/default'

const Wrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  .title {
    font-weight: ${theme.fonts.titleOne.weight};
    font-size: ${theme.fonts.titleOne.font};
    padding-left: 30px;
    color: ${theme.palette.text[0]};
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid ${theme.palette.basescale[6]};
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
          descripcion: 'Explora los datos disponibles a través de capas por departamento y por municipio',
          to: '/departments',
        },
        {
          titulo: 'REGIONES',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-24.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-19.svg',
          descripcion: 'Explora los datos disponibles a través de capas por regiones bióticas',
          to: '/departments',
        },
        {
          titulo: 'ECOSISTEMAS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-25.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-20.svg',
          descripcion: 'Explora los datos disponibles a ravés de capas por ecosistemas estratégicos',
          to: '/departments',
        },
        {
          titulo: 'ÁREAS PROTEGIDAS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-26.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-21.svg',
          descripcion: 'Explora los datos disponibles a través de capas por áreas protegidas',
          to: '/departments',
        },
        {
          titulo: 'CARS',
          img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-27.svg',
          imgC: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/svg/mapa-inicio-expgeo-22.svg',
          descripcion: 'Explora los datos disponibles a través de capas por CARS',
          to: '/departments',
        },
      ],
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Grid fluid>
            <Row>
              <Col className="title" md={12}>Explorador geográfico</Col>
              <Col className="accent-title" md={1} />
            </Row>
          </Grid>
        </Grid>
        <Grid fluid>
          <Row center="xs">
            {this.state.links.map((link, i) => (
              <GeographicExplorerItem key={i} link={link} />
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
