import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
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

export default class RegistrationElementSection extends React.Component {

  static propTypes = {
    ocurrence: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      occurrence: [],
    }
  }

  componentWillMount() {
    this.setState({
      occurrence: this.props.ocurrence,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Occurrence</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.occurrence.basisOfRecord && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Base del registro</Col>}
            {this.state.occurrence.basisOfRecord && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.basisOfRecord}</Col>}
            {this.state.occurrence.institutionCode && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Código de la institución</Col>}
            {this.state.occurrence.institutionCode && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.institutionCode}</Col>}
            {this.state.occurrence.collectionCode && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Código de la colección</Col>}
            {this.state.occurrence.collectionCode && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.collectionCode}</Col>}
            {this.state.occurrence.type && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Tipo</Col>}
            {this.state.occurrence.type && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.type}</Col>}
            {this.state.occurrence.modified && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Modificado</Col>}
            {this.state.occurrence.modified && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.modified}</Col>}
            {this.state.occurrence.language && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Idioma</Col>}
            {this.state.occurrence.language && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.language}</Col>}
            {this.state.occurrence.license && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Licencia</Col>}
            {this.state.occurrence.license && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.license}</Col>}
            {this.state.occurrence.rightsHolder && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Titular de los derechos</Col>}
            {this.state.occurrence.rightsHolder && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.rightsHolder}</Col>}
            {this.state.occurrence.accessRights && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Derechos de acceso</Col>}
            {this.state.occurrence.accessRights && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.accessRights}</Col>}
            {this.state.occurrence.bibliographicCitation && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Citación bibliográfica</Col>}
            {this.state.occurrence.bibliographicCitation && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.bibliographicCitation}</Col>}
            {this.state.occurrence.references && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Referencias</Col>}
            {this.state.occurrence.references && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.references}</Col>}
            {this.state.occurrence.institutionID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de la institución</Col>}
            {this.state.occurrence.institutionID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.institutionID}</Col>}
            {this.state.occurrence.collectionID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de la colección</Col>}
            {this.state.occurrence.collectionID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.collectionID}</Col>}
            {this.state.occurrence.datasetID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del conjunto de datos</Col>}
            {this.state.occurrence.datasetID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.datasetID}</Col>}
            {this.state.occurrence.datasetName && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Nombre del conjunto de datos</Col>}
            {this.state.occurrence.datasetName && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.datasetName}</Col>}
            {this.state.occurrence.ownerInstitutionCode && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Código de la institución propietaria</Col>}
            {this.state.occurrence.ownerInstitutionCode && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.ownerInstitutionCode}</Col>}
            {this.state.occurrence.informationWithheld && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Información retenida</Col>}
            {this.state.occurrence.informationWithheld && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.informationWithheld}</Col>}
            {this.state.occurrence.dataGeneralizations && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Generalización de los datos</Col>}
            {this.state.occurrence.dataGeneralizations && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.dataGeneralizations}</Col>}
            {this.state.occurrence.dynamicProperties && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Propiedades dinámicas</Col>}
            {this.state.occurrence.dynamicProperties && <Col xs={12} sm={6} md={6} lg={6}>{this.state.occurrence.dynamicProperties}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}
