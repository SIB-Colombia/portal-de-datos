import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MapGL from 'react-map-gl/src/index';

import * as FileService from '../../../services/FileService';

const Wrapper = styled.div ``

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      latitude: 3.9778673175455315,
      longitude: -72.80307563849925,
      zoom: 5
    }
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

  viewport(viewport) {
    console.log(viewport);
    const {latitude, longitude, zoom} = viewport;
    this.setState({latitude});
    this.setState({longitude});
    this.setState({zoom});
  }

  render() {
    return (
      <Wrapper>
        <MapGL width={this.state.width} height={this.state.height - 118} latitude={this.state.latitude} longitude={this.state.longitude} mapboxApiAccessToken={'pk.eyJ1IjoianJpY29ndWUiLCJhIjoiY2lucGhheHh0MTA0anVpa2p0Mnh6ZHowNyJ9.kPlMUeabWeCWeoJEL2lc2w'} zoom={this.state.zoom} onChangeViewport={v => this.viewport(v)}/>
      </Wrapper>
    )
  }
}

export default Map;
