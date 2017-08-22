import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row } from 'react-flexbox-grid'
import { DirectAccessItem } from 'components'
import theme from '../../themes/default'

const Wrapper = styled.div`
    background-color: ${theme.palette.grayscale[0]};
`

class DirectAccess extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          titulo: 'Registros',
          img: '/home/registros.png',
          descripcion: 'Explora a través del buscador de registros biológicos',
          to: '/search/',
        },
        {
          titulo: 'Publicadores',
          img: '/home/publicadores.png',
          descripcion: 'Conoce las entidades que comparten datos a través del SiB Colombia',
          to: '/publishers',
        },
        {
          titulo: 'Recursos',
          img: '/home/recursos.png',
          descripcion: 'Explora a través de los recursos disponibles en el portal',
          to: '/datasets',
        },
      ],
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row center="xs">
            {this.state.links.map((link, i) => (
              <DirectAccessItem key={i} link={link} />
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default DirectAccess
