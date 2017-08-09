import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div `
  .title-two {
    font-size: 30px;
    padding-left: 20px;
    color: #4B5353;
    margin-top: 40px;
  }
  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }

  .more-details {
    color: #4B5353;
    font-size: 20px;
    line-height: 45px;
    font-weight: 200;
    padding: 30px 0px;
    .details-title{
      font-weight: 600;
    }
  }
`

class TaxonSection extends React.Component {

  static propTypes = {
    ocurrence: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      ocurrence: [],
    }
  }

  componentWillMount() {
    this.setState({
      ocurrence: this.props.ocurrence,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" md={12}>Taxón</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.taxonID && <Col md={6} className="details-title">ID del taxón</Col>}
            {this.state.ocurrence.taxonID && <Col md={6}>{this.state.ocurrence.taxonID}</Col>}
            {this.state.ocurrence.scientificNameID && <Col md={6} className="details-title">ID del nombre científico</Col>}
            {this.state.ocurrence.scientificNameID && <Col md={6}>{this.state.ocurrence.scientificNameID}</Col>}
            {this.state.ocurrence.acceptedNameUsageID && <Col md={6} className="details-title">ID del nombre aceptado usado</Col>}
            {this.state.ocurrence.acceptedNameUsageID && <Col md={6}>{this.state.ocurrence.acceptedNameUsageID}</Col>}
            {this.state.ocurrence.parentNameUsageID && <Col md={6} className="details-title">ID del nombre parental usado</Col>}
            {this.state.ocurrence.parentNameUsageID && <Col md={6}>{this.state.ocurrence.parentNameUsageID}</Col>}
            {this.state.ocurrence.originalNameUsageID && <Col md={6} className="details-title">ID del nombre original usado</Col>}
            {this.state.ocurrence.originalNameUsageID && <Col md={6}>{this.state.ocurrence.originalNameUsageID}</Col>}
            {this.state.ocurrence.nameAccordingToID && <Col md={6} className="details-title">ID del nombre de acuerdo con</Col>}
            {this.state.ocurrence.nameAccordingToID && <Col md={6}>{this.state.ocurrence.nameAccordingToID}</Col>}
            {this.state.ocurrence.namePublishedInID && <Col md={6} className="details-title">ID del nombre publicado en</Col>}
            {this.state.ocurrence.namePublishedInID && <Col md={6}>{this.state.ocurrence.namePublishedInID}</Col>}
            {this.state.ocurrence.taxonConceptID && <Col md={6} className="details-title">ID del concepto del taxón</Col>}
            {this.state.ocurrence.taxonConceptID && <Col md={6}>{this.state.ocurrence.taxonConceptID}</Col>}
            {this.state.ocurrence.scientificName && <Col md={6} className="details-title">Nombre científico</Col>}
            {this.state.ocurrence.scientificName && <Col md={6}>{this.state.ocurrence.scientificName}</Col>}
            {this.state.ocurrence.acceptedNameUsage && <Col md={6} className="details-title">Nombre aceptado usado</Col>}
            {this.state.ocurrence.acceptedNameUsage && <Col md={6}>{this.state.ocurrence.acceptedNameUsage}</Col>}
            {this.state.ocurrence.parentNameUsage && <Col md={6} className="details-title">Nombre parental usado</Col>}
            {this.state.ocurrence.parentNameUsage && <Col md={6}>{this.state.ocurrence.parentNameUsage}</Col>}
            {this.state.ocurrence.originalNameUsage && <Col md={6} className="details-title">Nombre original usado</Col>}
            {this.state.ocurrence.originalNameUsage && <Col md={6}>{this.state.ocurrence.originalNameUsage}</Col>}
            {this.state.ocurrence.nameAccordingTo && <Col md={6} className="details-title">Nombre de acuerdo con</Col>}
            {this.state.ocurrence.nameAccordingTo && <Col md={6}>{this.state.ocurrence.nameAccordingTo}</Col>}
            {this.state.ocurrence.namePublishedIn && <Col md={6} className="details-title">Nombre publicado en</Col>}
            {this.state.ocurrence.namePublishedIn && <Col md={6}>{this.state.ocurrence.namePublishedIn}</Col>}
            {this.state.ocurrence.namePublishedInYear && <Col md={6} className="details-title">Nombre publicado en el año</Col>}
            {this.state.ocurrence.namePublishedInYear && <Col md={6}>{this.state.ocurrence.namePublishedInYear}</Col>}
            {this.state.ocurrence.higherClassification && <Col md={6} className="details-title">Clasificación superior</Col>}
            {this.state.ocurrence.higherClassification && <Col md={6}>{this.state.ocurrence.higherClassification}</Col>}
            {this.state.ocurrence.kingdom && <Col md={6} className="details-title">Reino</Col>}
            {this.state.ocurrence.kingdom && <Col md={6}>{this.state.ocurrence.kingdom}</Col>}
            {this.state.ocurrence.phylum && <Col md={6} className="details-title">Filo</Col>}
            {this.state.ocurrence.phylum && <Col md={6}>{this.state.ocurrence.phylum}</Col>}
            {this.state.ocurrence.class && <Col md={6} className="details-title">Clase</Col>}
            {this.state.ocurrence.class && <Col md={6}>{this.state.ocurrence.class}</Col>}
            {this.state.ocurrence.order && <Col md={6} className="details-title">Orden</Col>}
            {this.state.ocurrence.order && <Col md={6}>{this.state.ocurrence.order}</Col>}
            {this.state.ocurrence.family && <Col md={6} className="details-title">Familia</Col>}
            {this.state.ocurrence.family && <Col md={6}>{this.state.ocurrence.family}</Col>}
            {this.state.ocurrence.genus && <Col md={6} className="details-title">Género</Col>}
            {this.state.ocurrence.genus && <Col md={6}>{this.state.ocurrence.genus}</Col>}
            {this.state.ocurrence.subgenus && <Col md={6} className="details-title">Subgénero</Col>}
            {this.state.ocurrence.subgenus && <Col md={6}>{this.state.ocurrence.subgenus}</Col>}
            {this.state.ocurrence.specificEpithet && <Col md={6} className="details-title">Epíteto específico</Col>}
            {this.state.ocurrence.specificEpithet && <Col md={6}>{this.state.ocurrence.specificEpithet}</Col>}
            {this.state.ocurrence.infraspecificEpithet && <Col md={6} className="details-title">Epíteto infraespecífico</Col>}
            {this.state.ocurrence.infraspecificEpithet && <Col md={6}>{this.state.ocurrence.infraspecificEpithet}</Col>}
            {this.state.ocurrence.taxonRank && <Col md={6} className="details-title">Categoría del taxón</Col>}
            {this.state.ocurrence.taxonRank && <Col md={6}>{this.state.ocurrence.taxonRank}</Col>}
            {this.state.ocurrence.verbatimTaxonRank && <Col md={6} className="details-title">Categoría original del taxón</Col>}
            {this.state.ocurrence.verbatimTaxonRank && <Col md={6}>{this.state.ocurrence.verbatimTaxonRank}</Col>}
            {this.state.ocurrence.scientificNameAuthorship && <Col md={6} className="details-title">Autoría del nombre científico</Col>}
            {this.state.ocurrence.scientificNameAuthorship && <Col md={6}>{this.state.ocurrence.scientificNameAuthorship}</Col>}
            {this.state.ocurrence.vernacularName && <Col md={6} className="details-title">Nombre común</Col>}
            {this.state.ocurrence.vernacularName && <Col md={6}>{this.state.ocurrence.vernacularName}</Col>}
            {this.state.ocurrence.nomenclaturalCode && <Col md={6} className="details-title">Código nomenclatural</Col>}
            {this.state.ocurrence.nomenclaturalCode && <Col md={6}>{this.state.ocurrence.nomenclaturalCode}</Col>}
            {this.state.ocurrence.taxonomicStatus && <Col md={6} className="details-title">Estado taxonómico</Col>}
            {this.state.ocurrence.taxonomicStatus && <Col md={6}>{this.state.ocurrence.taxonomicStatus}</Col>}
            {this.state.ocurrence.nomenclaturalStatus && <Col md={6} className="details-title">Estado nomenclatural</Col>}
            {this.state.ocurrence.nomenclaturalStatus && <Col md={6}>{this.state.ocurrence.nomenclaturalStatus}</Col>}
            {this.state.ocurrence.taxonRemarks && <Col md={6} className="details-title">Comentarios del taxón</Col>}
            {this.state.ocurrence.taxonRemarks && <Col md={6}>{this.state.ocurrence.taxonRemarks}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default TaxonSection
