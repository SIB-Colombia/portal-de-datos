import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
        <Col className="title-two" md={12}>Ubicación</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.ocurrence.locationID && <Col md={6} className="details-title">ID de la ubicación</Col>}
            {this.state.ocurrence.locationID && <Col md={6}>{this.state.ocurrence.locationID}</Col>}
            {this.state.ocurrence.higherGeographyID && <Col md={6} className="details-title">ID de la geografía superior</Col>}
            {this.state.ocurrence.higherGeographyID && <Col md={6}>{this.state.ocurrence.higherGeographyID}</Col>}
            {this.state.ocurrence.higherGeography && <Col md={6} className="details-title">Geografía superior</Col>}
            {this.state.ocurrence.higherGeography && <Col md={6}>{this.state.ocurrence.higherGeography}</Col>}
            {this.state.ocurrence.continent && <Col md={6} className="details-title">Continente</Col>}
            {this.state.ocurrence.continent && <Col md={6}>{this.state.ocurrence.continent}</Col>}
            {this.state.ocurrence.waterBody && <Col md={6} className="details-title">Cuerpo de agua</Col>}
            {this.state.ocurrence.waterBody && <Col md={6}>{this.state.ocurrence.waterBody}</Col>}
            {this.state.ocurrence.islandGroup && <Col md={6} className="details-title">Grupo de islas</Col>}
            {this.state.ocurrence.islandGroup && <Col md={6}>{this.state.ocurrence.islandGroup}</Col>}
            {this.state.ocurrence.island && <Col md={6} className="details-title">Isla</Col>}
            {this.state.ocurrence.island && <Col md={6}>{this.state.ocurrence.island}</Col>}
            {this.state.ocurrence.country && <Col md={6} className="details-title">País</Col>}
            {this.state.ocurrence.country && <Col md={6}>{this.state.ocurrence.country}</Col>}
            {this.state.ocurrence.countryCode && <Col md={6} className="details-title">Código del país</Col>}
            {this.state.ocurrence.countryCode && <Col md={6}>{this.state.ocurrence.countryCode}</Col>}
            {this.state.ocurrence.stateProvince && <Col md={6} className="details-title">Departamento</Col>}
            {this.state.ocurrence.stateProvince && <Col md={6}>{this.state.ocurrence.stateProvince}</Col>}
            {this.state.ocurrence.county && <Col md={6} className="details-title">Municipio</Col>}
            {this.state.ocurrence.county && <Col md={6}>{this.state.ocurrence.county}</Col>}
            {this.state.ocurrence.municipality && <Col md={6} className="details-title">Centro poblado / Cabecera municipal</Col>}
            {this.state.ocurrence.municipality && <Col md={6}>{this.state.ocurrence.municipality}</Col>}
            {this.state.ocurrence.locality && <Col md={6} className="details-title">Localidad</Col>}
            {this.state.ocurrence.locality && <Col md={6}>{this.state.ocurrence.locality}</Col>}
            {this.state.ocurrence.verbatimLocality && <Col md={6} className="details-title">Localidad original</Col>}
            {this.state.ocurrence.verbatimLocality && <Col md={6}>{this.state.ocurrence.verbatimLocality}</Col>}
            {this.state.ocurrence.verbatimElevation && <Col md={6} className="details-title">Elevación original</Col>}
            {this.state.ocurrence.verbatimElevation && <Col md={6}>{this.state.ocurrence.verbatimElevation}</Col>}
            {this.state.ocurrence.minimumElevationInMeters && <Col md={6} className="details-title">Elevación mínima en metros</Col>}
            {this.state.ocurrence.minimumElevationInMeters && <Col md={6}>{this.state.ocurrence.minimumElevationInMeters}</Col>}
            {this.state.ocurrence.maximumElevationInMeters && <Col md={6} className="details-title">Elevación máxima en metros</Col>}
            {this.state.ocurrence.maximumElevationInMeters && <Col md={6}>{this.state.ocurrence.maximumElevationInMeters}</Col>}
            {this.state.ocurrence.verbatimDepth && <Col md={6} className="details-title">Profundidad original</Col>}
            {this.state.ocurrence.verbatimDepth && <Col md={6}>{this.state.ocurrence.verbatimDepth}</Col>}
            {this.state.ocurrence.minimumDepthInMeters && <Col md={6} className="details-title">Profundidad mínima en metros</Col>}
            {this.state.ocurrence.minimumDepthInMeters && <Col md={6}>{this.state.ocurrence.minimumDepthInMeters}</Col>}
            {this.state.ocurrence.maximumDepthInMeters && <Col md={6} className="details-title">Profundidad máxima en metros</Col>}
            {this.state.ocurrence.maximumDepthInMeters && <Col md={6}>{this.state.ocurrence.maximumDepthInMeters}</Col>}
            {this.state.ocurrence.minimumDistanceAboveSurfaceInMeters && <Col md={6} className="details-title">Distancia mínima de la superficie metros</Col>}
            {this.state.ocurrence.minimumDistanceAboveSurfaceInMeters && <Col md={6}>{this.state.ocurrence.minimumDistanceAboveSurfaceInMeters}</Col>}
            {this.state.ocurrence.maximumDistanceAboveSurfaceInMeters && <Col md={6} className="details-title">Distancia máxima de la superficie metros</Col>}
            {this.state.ocurrence.maximumDistanceAboveSurfaceInMeters && <Col md={6}>{this.state.ocurrence.maximumDistanceAboveSurfaceInMeters}</Col>}
            {this.state.ocurrence.locationAccordingTo && <Col md={6} className="details-title">Ubicación de acuerdo con</Col>}
            {this.state.ocurrence.locationAccordingTo && <Col md={6}>{this.state.ocurrence.locationAccordingTo}</Col>}
            {this.state.ocurrence.locationRemarks && <Col md={6} className="details-title">Comentarios de la ubicación</Col>}
            {this.state.ocurrence.locationRemarks && <Col md={6}>{this.state.ocurrence.locationRemarks}</Col>}
            {this.state.ocurrence.verbatimCoordinates && <Col md={6} className="details-title">Coordenadas originales</Col>}
            {this.state.ocurrence.verbatimCoordinates && <Col md={6}>{this.state.ocurrence.verbatimCoordinates}</Col>}
            {this.state.ocurrence.verbatimLatitude && <Col md={6} className="details-title">Latitud original</Col>}
            {this.state.ocurrence.verbatimLatitude && <Col md={6}>{this.state.ocurrence.verbatimLatitude}</Col>}
            {this.state.ocurrence.verbatimLongitude && <Col md={6} className="details-title">Longitud original</Col>}
            {this.state.ocurrence.verbatimLongitude && <Col md={6}>{this.state.ocurrence.verbatimLongitude}</Col>}
            {this.state.ocurrence.verbatimCoordinateSystem && <Col md={6} className="details-title">Sistema original de coordenadas</Col>}
            {this.state.ocurrence.verbatimCoordinateSystem && <Col md={6}>{this.state.ocurrence.verbatimCoordinateSystem}</Col>}
            {this.state.ocurrence.verbatimSRS && <Col md={6} className="details-title">SRS original</Col>}
            {this.state.ocurrence.verbatimSRS && <Col md={6}>{this.state.ocurrence.verbatimSRS}</Col>}
            {this.state.ocurrence.decimalLatitude && <Col md={6} className="details-title">Latitud decimal</Col>}
            {this.state.ocurrence.decimalLatitude && <Col md={6}>{this.state.ocurrence.decimalLatitude}</Col>}
            {this.state.ocurrence.decimalLongitude && <Col md={6} className="details-title">Longitud decimal</Col>}
            {this.state.ocurrence.decimalLongitude && <Col md={6}>{this.state.ocurrence.decimalLongitude}</Col>}
            {this.state.ocurrence.geodeticDatum && <Col md={6} className="details-title">Datum geodésico</Col>}
            {this.state.ocurrence.geodeticDatum && <Col md={6}>{this.state.ocurrence.geodeticDatum}</Col>}
            {this.state.ocurrence.coordinateUncertaintyInMeters && <Col md={6} className="details-title">Incertidumbre de las coordenadas en metros</Col>}
            {this.state.ocurrence.coordinateUncertaintyInMeters && <Col md={6}>{this.state.ocurrence.coordinateUncertaintyInMeters}</Col>}
            {this.state.ocurrence.coordinatePrecision && <Col md={6} className="details-title">Precisión de las coordenadas</Col>}
            {this.state.ocurrence.coordinatePrecision && <Col md={6}>{this.state.ocurrence.coordinatePrecision}</Col>}
            {this.state.ocurrence.pointRadiusSpatialFit && <Col md={6} className="details-title">Ajuste espacial del radio-punto</Col>}
            {this.state.ocurrence.pointRadiusSpatialFit && <Col md={6}>{this.state.ocurrence.pointRadiusSpatialFit}</Col>}
            {this.state.ocurrence.footprintWKT && <Col md={6} className="details-title">WKT footprint</Col>}
            {this.state.ocurrence.footprintWKT && <Col md={6}>{this.state.ocurrence.footprintWKT}</Col>}
            {this.state.ocurrence.footprintSRS && <Col md={6} className="details-title">SRS footprint</Col>}
            {this.state.ocurrence.footprintSRS && <Col md={6}>{this.state.ocurrence.footprintSRS}</Col>}
            {this.state.ocurrence.footprintSpatialFit && <Col md={6} className="details-title">Ajuste espacial de footprint</Col>}
            {this.state.ocurrence.footprintSpatialFit && <Col md={6}>{this.state.ocurrence.footprintSpatialFit}</Col>}
            {this.state.ocurrence.georeferencedBy && <Col md={6} className="details-title">Georreferenciado por</Col>}
            {this.state.ocurrence.georeferencedBy && <Col md={6}>{this.state.ocurrence.georeferencedBy}</Col>}
            {this.state.ocurrence.georeferencedDate && <Col md={6} className="details-title">Fecha de georreferenciación</Col>}
            {this.state.ocurrence.georeferencedDate && <Col md={6}>{this.state.ocurrence.georeferencedDate}</Col>}
            {this.state.ocurrence.georeferenceProtocol && <Col md={6} className="details-title">Protocolo de georreferenciación</Col>}
            {this.state.ocurrence.georeferenceProtocol && <Col md={6}>{this.state.ocurrence.georeferenceProtocol}</Col>}
            {this.state.ocurrence.georeferenceSources && <Col md={6} className="details-title">Fuentes de georreferenciación</Col>}
            {this.state.ocurrence.georeferenceSources && <Col md={6}>{this.state.ocurrence.georeferenceSources}</Col>}
            {this.state.ocurrence.georeferenceVerificationStatus && <Col md={6} className="details-title">Estado de la verificación de la georreferenciación</Col>}
            {this.state.ocurrence.georeferenceVerificationStatus && <Col md={6}>{this.state.ocurrence.georeferenceVerificationStatus}</Col>}
            {this.state.ocurrence.georeferenceRemarks && <Col md={6} className="details-title">Comentarios de la georreferenciación</Col>}
            {this.state.ocurrence.georeferenceRemarks && <Col md={6}>{this.state.ocurrence.georeferenceRemarks}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default LocationSection
