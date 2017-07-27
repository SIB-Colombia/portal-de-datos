import React from 'react'
import styled from 'styled-components'
import { Map, TileLayer } from 'react-leaflet'

const Wrapper = styled.div`
.leaflet-container {
    height: 400px;
    width: 100%;
}
`
const position = [4.36, -74.04];

class HumboldtMap extends React.Component {
  render() {
    return (
      <Wrapper>
        <Map center={position} zoom={5}>
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        </Map>
      </Wrapper>
    )
  }
}

export default HumboldtMap;
