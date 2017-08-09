import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'

const Wrapper = styled.div`
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

export default class RegistrationElementSection extends React.Component {

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
        <Col className="title-two" md={12}>Ocurrence</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.occurrenceID && <Col md={6} className="details-title">Base del registro</Col>}
            {this.state.ocurrence.occurrenceID && <Col md={6}>{this.state.ocurrence.occurrenceID}</Col>}
            {this.state.ocurrence.catalogNumber && <Col md={6} className="details-title">Código de la institución</Col>}
            {this.state.ocurrence.catalogNumber && <Col md={6}>{this.state.ocurrence.catalogNumber}</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col md={6} className="details-title">Código de la colección</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col md={6}>{this.state.ocurrence.occurrenceRemarks}</Col>}
            {this.state.ocurrence.recordNumber && <Col md={6} className="details-title">Tipo</Col>}
            {this.state.ocurrence.recordNumber && <Col md={6}>{this.state.ocurrence.recordNumber}</Col>}
            {this.state.ocurrence.recordedBy && <Col md={6} className="details-title">Modificado</Col>}
            {this.state.ocurrence.recordedBy && <Col md={6}>{this.state.ocurrence.recordedBy}</Col>}
            {this.state.ocurrence.organismID && <Col md={6} className="details-title">Idioma</Col>}
            {this.state.ocurrence.organismID && <Col md={6}>{this.state.ocurrence.organismID}</Col>}
            {this.state.ocurrence.individualCount && <Col md={6} className="details-title">Licencia</Col>}
            {this.state.ocurrence.individualCount && <Col md={6}>{this.state.ocurrence.individualCount}</Col>}
            {this.state.ocurrence.sex && <Col md={6} className="details-title">Titular de los derechos</Col>}
            {this.state.ocurrence.sex && <Col md={6}>{this.state.ocurrence.sex}</Col>}
            {this.state.ocurrence.lifeStage && <Col md={6} className="details-title">Derechos de acceso</Col>}
            {this.state.ocurrence.lifeStage && <Col md={6}>{this.state.ocurrence.lifeStage}</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col md={6} className="details-title">Citación bibliográfica</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col md={6}>{this.state.ocurrence.reproductiveCondition}</Col>}
            {this.state.ocurrence.behavior && <Col md={6} className="details-title">Referencias</Col>}
            {this.state.ocurrence.behavior && <Col md={6}>{this.state.ocurrence.behavior}</Col>}
            {this.state.ocurrence.establishmentMeans && <Col md={6} className="details-title">ID de la institución</Col>}
            {this.state.ocurrence.establishmentMeans && <Col md={6}>{this.state.ocurrence.establishmentMeans}</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col md={6} className="details-title">ID de la colección</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col md={6}>{this.state.ocurrence.occurrenceStatus}</Col>}
            {this.state.ocurrence.preparations && <Col md={6} className="details-title">ID del conjunto de datos</Col>}
            {this.state.ocurrence.preparations && <Col md={6}>{this.state.ocurrence.preparations}</Col>}
            {this.state.ocurrence.disposition && <Col md={6} className="details-title">Nombre del conjunto de datos</Col>}
            {this.state.ocurrence.disposition && <Col md={6}>{this.state.ocurrence.disposition}</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col md={6} className="details-title">Código de la institución propietaria</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col md={6}>{this.state.ocurrence.otherCatalogNumbers}</Col>}
            {this.state.ocurrence.associatedMedia && <Col md={6} className="details-title">Información retenida</Col>}
            {this.state.ocurrence.associatedMedia && <Col md={6}>{this.state.ocurrence.associatedMedia}</Col>}
            {this.state.ocurrence.associatedReferences && <Col md={6} className="details-title">Generalización de los datos</Col>}
            {this.state.ocurrence.associatedReferences && <Col md={6}>{this.state.ocurrence.associatedReferences}</Col>}
            {this.state.ocurrence.associatedSequences && <Col md={6} className="details-title">Propiedades dinámicas</Col>}
            {this.state.ocurrence.associatedSequences && <Col md={6}>{this.state.ocurrence.associatedSequences}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
