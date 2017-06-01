import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MapGL, {ScatterplotOverlay, autobind} from 'react-map-gl/src/index';
import Immutable from 'immutable';
import {range} from 'd3-array';

import * as FileService from '../../../services/FileService';

const Wrapper = styled.div ``

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      viewport: {
        latitude: 3.9778673175455315,
        longitude: -72.80307563849925,
        zoom: 5,
        startDragLngLat: null,
        isDragging: false
      }
    }
    autobind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  // viewport(viewport) {
  //   console.log(viewport);
  //   const {latitude, longitude, zoom} = viewport;
  //   this.setState({latitude});
  //   this.setState({longitude});
  //   this.setState({zoom});
  // }}


  _onChangeViewport(viewport) {
    this.setState({viewport});
  }
  _onClick(val) {
    console.log(val);
    // this.setState({viewport});
  }

  locations() {
      return Immutable.fromJS([
       [-72.80307563849925, 3.9778673175455315],
       [-73.80365563849925, 3.998673175455315],
       [-72.80307563849925, 3.9278673175455315],
       [-72.8097563849925, 3.9178673175455315],
       [-72.80897563449925, 3.9558673175455315],
       [-72.80733563849925, 3.9668673175455315],
       [-72.9030756949925, 3.9798673175455315],
       [-72.20307563849925, 3.2778743175455315],
       [-72.10307563849925, 3.9778673175455315],
       [-72.80366563849925, 3.178993175455315],
       [-72.803078563849925, 3.6668673175455315],
       [-72.80302463849925, 3.988673175455315],
       [-72.80307561749925, 3.9797483175455315],
     ]);
  }

  render() {

    const viewport = {
      ...this.state.viewport,
      ...this.props
    };
    let width = this.state.width;
    let height = this.state.height - 118;
    return (
      <Wrapper>
        <MapGL {...viewport} width={width} height={height} mapboxApiAccessToken={'pk.eyJ1IjoianJpY29ndWUiLCJhIjoiY2lucGhheHh0MTA0anVpa2p0Mnh6ZHowNyJ9.kPlMUeabWeCWeoJEL2lc2w'} onChangeViewport={this._onChangeViewport} perspectiveEnabled>
          <ScatterplotOverlay {...viewport} onClick={ this._onClick } isDragging={true} width={width} height={height} locations={this.locations()} dotRadius={5} globalOpacity={0.96} compositeOperation="screen" dotFill="#1FBAD6" renderWhileDragging={true}/>
        </MapGL>
      </Wrapper>
    )
  }
}

export default Map;
