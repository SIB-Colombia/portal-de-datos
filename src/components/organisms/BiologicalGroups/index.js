import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { BiologicalItem } from 'components'

const Wrapper = styled.div`
    margin-top: 85px;
    margin-bottom: 130px;

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

class BiologicalGroups extends Component {

  constructor(props) {
    super(props)

    this.state = {
      groups: [
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-invertebrados.png', title: 'INVERTEBRADOS', q: 'phylumName=Chordata' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-vertebrados.png', title: 'VERTEBRADOS', q: 'phylumName=Acanthocephala&phylumName=Annelida&phylumName=Arthropoda&phylumName=Brachiopoda&phylumName=Bryozoa&phylumName=Chaetognatha&phylumName=Cnidaria&phylumName=Echinodermata&phylumName=Gastrotricha&phylumName=Mollusca&phylumName=Myxozoa&phylumName=Nematoda&phylumName=Onychophora&phylumName=Platyhelminthes&phylumName=Porifera&phylumName=Rotifera&phylumName=Sipuncula' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-plantas.png', title: 'PLANTAS', q: 'kingdomName=Plantae' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-hongos.png', title: 'HONGOS', q: 'kingdomName=Fungi' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-chromista.png', title: 'CHROMISTA', q: 'kingdomName=Chromista' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-otros.png', title: 'OTROS', q: 'kingdomName=Archaea&kingdomName=Bacteria&kingdomName=incertae sedis&kingdomName=Protozoa&kingdomName=Viruses' },
      ],
    }
  }



  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col className="title" md={12}>Explora los datos a travéz de grupos biológicos</Col>
            <Col className="accent-title" md={1} />
          </Row>
          <Row style={{ marginTop: 50 }} between="md">
            {this.state.groups.map((group, i) => (
              <BiologicalItem key={i} group={group} />
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default BiologicalGroups
