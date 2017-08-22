import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { BiologicalItem } from 'components'
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

class BiologicalGroups extends Component {

  constructor(props) {
    super(props)

    this.state = {
      groups: [
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-invertebrados.png', title: 'INVERTEBRADOS', q: 'phylumName=Chordata' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-vertebrados.png', title: 'VERTEBRADOS', q: 'phylumName=Acanthocephala&phylumName=Annelida&phylumName=Arthropoda&phylumName=Brachiopoda&phylumName=Bryozoa&phylumName=Chaetognatha&phylumName=Cnidaria&phylumName=Echinodermata&phylumName=Gastrotricha&phylumName=Mollusca&phylumName=Myxozoa&phylumName=Nematoda&phylumName=Onychophora&phylumName=Platyhelminthes&phylumName=Porifera&phylumName=Rotifera&phylumName=Sipuncula' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-plantas.png', title: 'PLANTAS', q: 'kingdomName=Plantae' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-hongos.png', title: 'HONGOS', q: 'kingdomName=Fungi' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-chromista.png', title: 'CHROMISTA', q: 'kingdomName=Chromista' },
        { img: 'https://s3.amazonaws.com/sib-resources/images/portal-de-datos/png/h-portal-otros.png', title: 'OTROS', q: 'kingdomName=Archaea&kingdomName=Bacteria&kingdomName=incertae sedis&kingdomName=Protozoa&kingdomName=Viruses' },
      ],
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Grid fluid>
            <Row>
              <Col className="title" xs={12} sm={12} md={12} lg={12}>Explora a través de grupos biológicos</Col>
              <Col className="accent-title" xs={1} sm={1} md={1} lg={1} />
            </Row>
            <Row style={{ marginTop: 45 }} between="md">
              {this.state.groups.map((group, i) => (
                <BiologicalItem key={i} group={group} />
              ))}
            </Row>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

export default BiologicalGroups
