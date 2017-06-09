import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
// import MapGL, {ScatterplotOverlay, autobind} from 'react-map-gl/src/index';
// import Immutable from 'immutable';
// import {range} from 'd3-array';
//import 'mapbox-gl/dist/mapbox-gl.css';
import {IconLink, Link, MapRecordPreview} from 'components';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Polygon,
  LayerGroup,
  LayersControl,
  FeatureGroup,
  CircleMarker,
  GeoJSON,
  VectorLayers,
  BingLayer
} from 'react-leaflet';

import * as DataPortalService from '../../../services/DataPortalService';

const Wrapper = styled.div `
  .map{
    width: 100% !important;
    height: calc(100% - 52px) !important;
    position: absolute !important;
    left:0 !important;
    top: 0px !important;
  }
`

class MapPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      polygom: [],
      open: false,
      record: null
    }
  }

  componentWillMount() {

    let polygom = [];
    this.props.data.features.forEach((elem, i) => {
      let coors = elem.geometry.coordinates[0];
      // let color = elem.properties.fill;
      // let count = elem.properties.count;
      coors.forEach((child, j) => {
        coors[j] = [child[0], child[1]];
        // coors[j] = [child[1], child[0]];
        // elem.geometry.coordinates[0][j] = [child[1], child[0]]
      })
      elem.geometry.coordinates[0] = coors;
      // polygom[i] = elem;
      // polygom[i] = (<Polygon key={i} color={color} positions={coors} ><Popup><span><b>No. registros:</b> {count} <br/><a className="detail">Ver detalle</a></span></Popup></Polygon>);
      // polygom[i] = (<Polygon key={i} color={color} positions={coors} onTouchTap={this.handleOpen} />);
    });
    // console.log('->',polygom);
    // this.setState({polygom});
    // console.log(this.props.data);
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleClick = (e) => {

    this.setState({record: null});
    if (e.layer) {
      //console.log('layer', e.layer.feature);
      let coors = e.layer.feature.geometry.coordinates[0];
      this.setState({open: true});
      DataPortalService.getOccurrenceSearch(`?latitudeTopLeft=${coors[1][1]}&longitudeTopLeft=${coors[1][0]}&latitudeBottomRight=${coors[3][1]}&longitudeBottomRight=${coors[3][0]}&size=10&facet%5B%5D=provider_name&facet%5B%5D=resource_name&facet%5B%5D=basis_of_record&facet%5B%5D=collection_name&facetLimit=1000`).then(data => {
        this.setState({record: data});
      });
    }
  }

  onEachFeature = (feature, layer) => {

    if (feature.properties && feature.properties.count) {
      layer.options.color = feature.properties.fill;
      layer.options.fillOpacity = 0.8;
    }

  }

  render() {

    const center = [4, -74]
    const actions = [ < FlatButton label = "Cerrar" primary = {
        true
      }
      onTouchTap = {
        this.handleClose
      } />, < Link to = "/file/search" > < RaisedButton label = "Ver más" className = "btn-secondary-modal" onTouchTap = {
        this.handleSearch
      } /> </Link>
    ];

    const customContentStyle = {
      // width: '70%',
      // maxWidth: 'none',

    };

    return (
      <Wrapper>
        <Map center={center} zoom={6} className="map" animate={false} ref="map">
          <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"/>
          <GeoJSON data={this.props.data.features} onClick={this.handleClick} weight={1} onEachFeature={this.onEachFeature}/>
          <LayersControl position='topright'>
            <LayersControl.BaseLayer name='Mapa Oscuro'>
              <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'/>
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Mapa Claro'>
              <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'/>
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Mapa Blanco y Negro'>
              <TileLayer url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'/>
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='Mapa Estándar'>
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </LayersControl.BaseLayer>
          </LayersControl>
        </Map>
        <Dialog titleClassName="modal-header-style" contentStyle={customContentStyle} actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent={true}>
          {this.state.record && <MapRecordPreview className="animated fadeIn" data={this.state.record}/> || <CircularProgress className="loading"/>}
        </Dialog>
      </Wrapper>
    )
  }
}

export default MapPreview;
