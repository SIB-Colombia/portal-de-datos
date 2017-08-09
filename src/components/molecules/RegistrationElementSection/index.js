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
            {this.state. && <Col md={6} className="details-title">Base del registro</Col>}
            {this.state.occurrence.basisOfRecord && <Col md={6}>{this.state.occurrence.basisOfRecord}</Col>}
            {this.state. && <Col md={6} className="details-title">Código de la institución</Col>}
            {this.state.occurrence.institutionCode && <Col md={6}>{this.state.occurrence.institutionCode}</Col>}
            {this.state. && <Col md={6} className="details-title">Código de la colección</Col>}
            {this.state.occurrence.collectionCode && <Col md={6}>{this.state.occurrence.collectionCode}</Col>}
            {this.state. && <Col md={6} className="details-title">Tipo</Col>}
            {this.state.occurrence.type && <Col md={6}>{this.state.occurrence.type}</Col>}
            {this.state. && <Col md={6} className="details-title">Modificado</Col>}
            {this.state.occurrence.modified && <Col md={6}>{this.state.occurrence.modified}</Col>}
            {this.state. && <Col md={6} className="details-title">Idioma</Col>}
            {this.state.occurrence.language && <Col md={6}>{this.state.occurrence.language}</Col>}
            {this.state. && <Col md={6} className="details-title">Licencia</Col>}
            {this.state.occurrence.license && <Col md={6}>{this.state.occurrence.license}</Col>}
            {this.state. && <Col md={6} className="details-title">Titular de los derechos</Col>}
            {this.state.occurrence.rightsHolder && <Col md={6}>{this.state.occurrence.rightsHolder}</Col>}
            {this.state. && <Col md={6} className="details-title">Derechos de acceso</Col>}
            {this.state.occurrence.accessRights && <Col md={6}>{this.state.occurrence.accessRights}</Col>}
            {this.state. && <Col md={6} className="details-title">Citación bibliográfica</Col>}
            {this.state.occurrence.bibliographicCitation && <Col md={6}>{this.state.occurrence.bibliographicCitation}</Col>}
            {this.state. && <Col md={6} className="details-title">Referencias</Col>}
            {this.state.occurrence.references && <Col md={6}>{this.state.occurrence.references}</Col>}
            {this.state. && <Col md={6} className="details-title">ID de la institución</Col>}
            {this.state.occurrence.institutionID && <Col md={6}>{this.state.occurrence.institutionID}</Col>}
            {this.state. && <Col md={6} className="details-title">ID de la colección</Col>}
            {this.state.occurrence.collectionID && <Col md={6}>{this.state.occurrence.collectionID}</Col>}
            {this.state. && <Col md={6} className="details-title">ID del conjunto de datos</Col>}
            {this.state.occurrence.datasetID && <Col md={6}>{this.state.occurrence.datasetID}</Col>}
            {this.state. && <Col md={6} className="details-title">Nombre del conjunto de datos</Col>}
            {this.state.occurrence.datasetName && <Col md={6}>{this.state.occurrence.datasetName}</Col>}
            {this.state. && <Col md={6} className="details-title">Código de la institución propietaria</Col>}
            {this.state.occurrence.ownerInstitutionCode && <Col md={6}>{this.state.occurrence.ownerInstitutionCode}</Col>}
            {this.state. && <Col md={6} className="details-title">Información retenida</Col>}
            {this.state.occurrence.informationWithheld && <Col md={6}>{this.state.occurrence.informationWithheld}</Col>}
            {this.state. && <Col md={6} className="details-title">Generalización de los datos</Col>}
            {this.state.occurrence.dataGeneralizations && <Col md={6}>{this.state.occurrence.dataGeneralizations}</Col>}
            {this.state. && <Col md={6} className="details-title">Propiedades dinámicas</Col>}
            {this.state.occurrence.dynamicProperties && <Col md={6}>{this.state.occurrence.dynamicProperties}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
