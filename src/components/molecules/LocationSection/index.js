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

class LocationSection extends React.Component {

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
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Ubicación</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.ocurrence.locationID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de la ubicación</Col>}
            {this.state.ocurrence.locationID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.locationID}</Col>}
            {this.state.ocurrence.higherGeographyID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID de la geografía superior</Col>}
            {this.state.ocurrence.higherGeographyID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.higherGeographyID}</Col>}
            {this.state.ocurrence.higherGeography && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Geografía superior</Col>}
            {this.state.ocurrence.higherGeography && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.higherGeography}</Col>}
            {this.state.ocurrence.continent && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Continente</Col>}
            {this.state.ocurrence.continent && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.continent}</Col>}
            {this.state.ocurrence.waterBody && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Cuerpo de agua</Col>}
            {this.state.ocurrence.waterBody && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.waterBody}</Col>}
            {this.state.ocurrence.islandGroup && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Grupo de islas</Col>}
            {this.state.ocurrence.islandGroup && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.islandGroup}</Col>}
            {this.state.ocurrence.island && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Isla</Col>}
            {this.state.ocurrence.island && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.island}</Col>}
            {this.state.ocurrence.country && <Col xs={12} sm={6} md={6} lg={6} className="details-title">País</Col>}
            {this.state.ocurrence.country && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.country}</Col>}
            {this.state.ocurrence.countryCode && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Código del país</Col>}
            {this.state.ocurrence.countryCode && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.countryCode}</Col>}
            {this.state.ocurrence.stateProvince && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Departamento</Col>}
            {this.state.ocurrence.stateProvince && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.stateProvince}</Col>}
            {this.state.ocurrence.county && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Municipio</Col>}
            {this.state.ocurrence.county && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.county}</Col>}
            {this.state.ocurrence.municipality && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Centro poblado / Cabecera municipal</Col>}
            {this.state.ocurrence.municipality && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.municipality}</Col>}
            {this.state.ocurrence.locality && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Localidad</Col>}
            {this.state.ocurrence.locality && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.locality}</Col>}
            {this.state.ocurrence.verbatimLocality && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Localidad original</Col>}
            {this.state.ocurrence.verbatimLocality && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimLocality}</Col>}
            {this.state.ocurrence.verbatimElevation && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Elevación original</Col>}
            {this.state.ocurrence.verbatimElevation && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimElevation}</Col>}
            {this.state.ocurrence.minimumElevationInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Elevación mínima en metros</Col>}
            {this.state.ocurrence.minimumElevationInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.minimumElevationInMeters}</Col>}
            {this.state.ocurrence.maximumElevationInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Elevación máxima en metros</Col>}
            {this.state.ocurrence.maximumElevationInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.maximumElevationInMeters}</Col>}
            {this.state.ocurrence.verbatimDepth && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Profundidad original</Col>}
            {this.state.ocurrence.verbatimDepth && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimDepth}</Col>}
            {this.state.ocurrence.minimumDepthInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Profundidad mínima en metros</Col>}
            {this.state.ocurrence.minimumDepthInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.minimumDepthInMeters}</Col>}
            {this.state.ocurrence.maximumDepthInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Profundidad máxima en metros</Col>}
            {this.state.ocurrence.maximumDepthInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.maximumDepthInMeters}</Col>}
            {this.state.ocurrence.minimumDistanceAboveSurfaceInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Distancia mínima de la superficie metros</Col>}
            {this.state.ocurrence.minimumDistanceAboveSurfaceInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.minimumDistanceAboveSurfaceInMeters}</Col>}
            {this.state.ocurrence.maximumDistanceAboveSurfaceInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Distancia máxima de la superficie metros</Col>}
            {this.state.ocurrence.maximumDistanceAboveSurfaceInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.maximumDistanceAboveSurfaceInMeters}</Col>}
            {this.state.ocurrence.locationAccordingTo && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Ubicación de acuerdo con</Col>}
            {this.state.ocurrence.locationAccordingTo && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.locationAccordingTo}</Col>}
            {this.state.ocurrence.locationRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios de la ubicación</Col>}
            {this.state.ocurrence.locationRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.locationRemarks}</Col>}
            {this.state.ocurrence.verbatimCoordinates && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Coordenadas originales</Col>}
            {this.state.ocurrence.verbatimCoordinates && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimCoordinates}</Col>}
            {this.state.ocurrence.verbatimLatitude && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Latitud original</Col>}
            {this.state.ocurrence.verbatimLatitude && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimLatitude}</Col>}
            {this.state.ocurrence.verbatimLongitude && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Longitud original</Col>}
            {this.state.ocurrence.verbatimLongitude && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimLongitude}</Col>}
            {this.state.ocurrence.verbatimCoordinateSystem && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Sistema original de coordenadas</Col>}
            {this.state.ocurrence.verbatimCoordinateSystem && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimCoordinateSystem}</Col>}
            {this.state.ocurrence.verbatimSRS && <Col xs={12} sm={6} md={6} lg={6} className="details-title">SRS original</Col>}
            {this.state.ocurrence.verbatimSRS && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.verbatimSRS}</Col>}
            {this.state.ocurrence.decimalLatitude && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Latitud decimal</Col>}
            {this.state.ocurrence.decimalLatitude && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.decimalLatitude}</Col>}
            {this.state.ocurrence.decimalLongitude && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Longitud decimal</Col>}
            {this.state.ocurrence.decimalLongitude && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.decimalLongitude}</Col>}
            {this.state.ocurrence.geodeticDatum && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Datum geodésico</Col>}
            {this.state.ocurrence.geodeticDatum && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.geodeticDatum}</Col>}
            {this.state.ocurrence.coordinateUncertaintyInMeters && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Incertidumbre de las coordenadas en metros</Col>}
            {this.state.ocurrence.coordinateUncertaintyInMeters && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.coordinateUncertaintyInMeters}</Col>}
            {this.state.ocurrence.coordinatePrecision && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Precisión de las coordenadas</Col>}
            {this.state.ocurrence.coordinatePrecision && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.coordinatePrecision}</Col>}
            {this.state.ocurrence.pointRadiusSpatialFit && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Ajuste espacial del radio-punto</Col>}
            {this.state.ocurrence.pointRadiusSpatialFit && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.pointRadiusSpatialFit}</Col>}
            {this.state.ocurrence.footprintWKT && <Col xs={12} sm={6} md={6} lg={6} className="details-title">WKT footprint</Col>}
            {this.state.ocurrence.footprintWKT && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.footprintWKT}</Col>}
            {this.state.ocurrence.footprintSRS && <Col xs={12} sm={6} md={6} lg={6} className="details-title">SRS footprint</Col>}
            {this.state.ocurrence.footprintSRS && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.footprintSRS}</Col>}
            {this.state.ocurrence.footprintSpatialFit && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Ajuste espacial de footprint</Col>}
            {this.state.ocurrence.footprintSpatialFit && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.footprintSpatialFit}</Col>}
            {this.state.ocurrence.georeferencedBy && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Georreferenciado por</Col>}
            {this.state.ocurrence.georeferencedBy && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferencedBy}</Col>}
            {this.state.ocurrence.georeferencedDate && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha de georreferenciación</Col>}
            {this.state.ocurrence.georeferencedDate && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferencedDate}</Col>}
            {this.state.ocurrence.georeferenceProtocol && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Protocolo de georreferenciación</Col>}
            {this.state.ocurrence.georeferenceProtocol && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferenceProtocol}</Col>}
            {this.state.ocurrence.georeferenceSources && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fuentes de georreferenciación</Col>}
            {this.state.ocurrence.georeferenceSources && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferenceSources}</Col>}
            {this.state.ocurrence.georeferenceVerificationStatus && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Estado de la verificación de la georreferenciación</Col>}
            {this.state.ocurrence.georeferenceVerificationStatus && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferenceVerificationStatus}</Col>}
            {this.state.ocurrence.georeferenceRemarks && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Comentarios de la georreferenciación</Col>}
            {this.state.ocurrence.georeferenceRemarks && <Col xs={12} sm={6} md={6} lg={6}>{this.state.ocurrence.georeferenceRemarks}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default LocationSection
