import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row } from 'react-flexbox-grid'
import { DirectAccessItem } from 'components'

const Wrapper = styled.div`
    background-color: white;
`

class DirectAccess extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          titulo: 'Departamentos',
          img: '/home/colombia.png',
          descripcion: 'Explora los datos disponibles para cada departamento',
          to: '/departaments/',
        },
        {
          titulo: 'Publicadores',
          img: '/home/publicadores.png',
          descripcion: 'Explora los datos a través de las entidades que comparten datos a través del SiB Colombia',
          to: '/provider/',
        },
        {
          titulo: 'Recursos',
          img: '/home/recursos.png',
          descripcion: 'Explora a través de los recursos disponibles en el portal',
          to: 'search/result/dataset',
        },
      ],
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row around="md">
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
