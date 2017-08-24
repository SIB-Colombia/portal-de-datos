import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .title-two {
    font-size: 24px;
    color: ${theme.palette.text[0]};
    margin-top: 60px;
  }
  .accent-title {
    margin-top: 20px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .more-details {
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleTwo.font};
    line-height: 28px;
    font-weight: ${theme.fonts.subTitleTwo.weight};
    padding: 20px;
    .details-title{
      font-weight: 600;
      margin-top: 1px;
      margin-bottom: 1px;
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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Registro</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.occurrenceID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del registro biológico</Col>}
            {this.state.ocurrence.occurrenceID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.occurrenceID}</Col>}
            {this.state.ocurrence.catalogNumber && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Número de catálogo</Col>}
            {this.state.ocurrence.catalogNumber && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.catalogNumber}</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios del registro biológico</Col>}
            {this.state.ocurrence.occurrenceRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.occurrenceRemarks}</Col>}
            {this.state.ocurrence.recordNumber && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Número de registro</Col>}
            {this.state.ocurrence.recordNumber && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.recordNumber}</Col>}
            {this.state.ocurrence.recordedBy && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Registrado por</Col>}
            {this.state.ocurrence.recordedBy && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.recordedBy}</Col>}
            {this.state.ocurrence.organismID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del individuo</Col>}
            {this.state.ocurrence.organismID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.organismID}</Col>}
            {this.state.ocurrence.individualCount && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Número de individuos</Col>}
            {this.state.ocurrence.individualCount && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.individualCount}</Col>}
            {this.state.ocurrence.sex && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Sexo</Col>}
            {this.state.ocurrence.sex && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.sex}</Col>}
            {this.state.ocurrence.lifeStage && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Etapa de vida</Col>}
            {this.state.ocurrence.lifeStage && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.lifeStage}</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Condición reproductiva</Col>}
            {this.state.ocurrence.reproductiveCondition && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.reproductiveCondition}</Col>}
            {this.state.ocurrence.behavior && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comportamiento</Col>}
            {this.state.ocurrence.behavior && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.behavior}</Col>}
            {this.state.ocurrence.establishmentMeans && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Medios de establecimiento</Col>}
            {this.state.ocurrence.establishmentMeans && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.establishmentMeans}</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Estado del registro biológico</Col>}
            {this.state.ocurrence.occurrenceStatus && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.occurrenceStatus}</Col>}
            {this.state.ocurrence.preparations && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Preparaciones</Col>}
            {this.state.ocurrence.preparations && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.preparations}</Col>}
            {this.state.ocurrence.disposition && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Disposición</Col>}
            {this.state.ocurrence.disposition && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.disposition}</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Otros números de catálogo</Col>}
            {this.state.ocurrence.otherCatalogNumbers && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.otherCatalogNumbers}</Col>}
            {this.state.ocurrence.associatedMedia && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Medios asociados</Col>}
            {this.state.ocurrence.associatedMedia && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedMedia}</Col>}
            {this.state.ocurrence.associatedReferences && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Referencias asociadas</Col>}
            {this.state.ocurrence.associatedReferences && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedReferences}</Col>}
            {this.state.ocurrence.associatedSequences && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Secuencias asociadas</Col>}
            {this.state.ocurrence.associatedSequences && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedSequences}</Col>}
            {this.state.ocurrence.associatedTaxa && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Taxones asociados</Col>}
            {this.state.ocurrence.associatedTaxa && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.associatedTaxa}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}
