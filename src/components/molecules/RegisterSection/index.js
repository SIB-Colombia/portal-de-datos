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

export default class RegisterSection extends React.Component {

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
        <Col className="title-two" md={12}>Registro</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.occurrenceID && <Col md={6} className="details-title">ID del registro biológico</Col>}
            {this.state.ocurrence.occurrenceID && <Col md={6}>{this.state.ocurrence.occurrenceID}</Col>}
            {this.state.ocurrence.catalogNumber && <Col md={6} className="details-title">Número de catálogo</Col>}
            {this.state.ocurrence.catalogNumber && <Col md={6}>{this.state.ocurrence.catalogNumber}</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col md={6} className="details-title">Comentarios del registro biológico</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col md={6}>{this.state.ocurrence.occurrenceRemarks}</Col>}
            {this.state.ocurrence.recordNumber && <Col md={6} className="details-title">Número de registro</Col>}
            {this.state.ocurrence.recordNumber && <Col md={6}>{this.state.ocurrence.recordNumber}</Col>}
            {this.state.ocurrence.recordedBy && <Col md={6} className="details-title">Registrado por</Col>}
            {this.state.ocurrence.recordedBy && <Col md={6}>{this.state.ocurrence.recordedBy}</Col>}
            {this.state.ocurrence.organismID && <Col md={6} className="details-title">ID del individuo</Col>}
            {this.state.ocurrence.organismID && <Col md={6}>{this.state.ocurrence.organismID}</Col>}
            {this.state.ocurrence.individualCount && <Col md={6} className="details-title">Número de individuos</Col>}
            {this.state.ocurrence.individualCount && <Col md={6}>{this.state.ocurrence.individualCount}</Col>}
            {this.state.ocurrence.sex && <Col md={6} className="details-title">Sexo</Col>}
            {this.state.ocurrence.sex && <Col md={6}>{this.state.ocurrence.sex}</Col>}
            {this.state.ocurrence.lifeStage && <Col md={6} className="details-title">Etapa de vida</Col>}
            {this.state.ocurrence.lifeStage && <Col md={6}>{this.state.ocurrence.lifeStage}</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col md={6} className="details-title">Condición reproductiva</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col md={6}>{this.state.ocurrence.reproductiveCondition}</Col>}
            {this.state.ocurrence.behavior && <Col md={6} className="details-title">Comportamiento</Col>}
            {this.state.ocurrence.behavior && <Col md={6}>{this.state.ocurrence.behavior}</Col>}
            {this.state.ocurrence.establishmentMeans && <Col md={6} className="details-title">Medios de establecimiento</Col>}
            {this.state.ocurrence.establishmentMeans && <Col md={6}>{this.state.ocurrence.establishmentMeans}</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col md={6} className="details-title">Estado del registro biológico</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col md={6}>{this.state.ocurrence.occurrenceStatus}</Col>}
            {this.state.ocurrence.preparations && <Col md={6} className="details-title">Preparaciones</Col>}
            {this.state.ocurrence.preparations && <Col md={6}>{this.state.ocurrence.preparations}</Col>}
            {this.state.ocurrence.disposition && <Col md={6} className="details-title">Disposición</Col>}
            {this.state.ocurrence.disposition && <Col md={6}>{this.state.ocurrence.disposition}</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col md={6} className="details-title">Otros números de catálogo</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col md={6}>{this.state.ocurrence.otherCatalogNumbers}</Col>}
            {this.state.ocurrence.associatedMedia && <Col md={6} className="details-title">Medios asociados</Col>}
            {this.state.ocurrence.associatedMedia && <Col md={6}>{this.state.ocurrence.associatedMedia}</Col>}
            {this.state.ocurrence.associatedReferences && <Col md={6} className="details-title">Referencias asociadas</Col>}
            {this.state.ocurrence.associatedReferences && <Col md={6}>{this.state.ocurrence.associatedReferences}</Col>}
            {this.state.ocurrence.associatedSequences && <Col md={6} className="details-title">Secuencias asociadas</Col>}
            {this.state.ocurrence.associatedSequences && <Col md={6}>{this.state.ocurrence.associatedSequences}</Col>}
            {this.state.ocurrence.associatedTaxa && <Col md={6} className="details-title">Taxones asociados</Col>}
            {this.state.ocurrence.associatedTaxa && <Col md={6}>{this.state.ocurrence.associatedTaxa}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
