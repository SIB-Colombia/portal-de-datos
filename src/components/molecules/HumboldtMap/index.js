import React from 'react'
import styled from 'styled-components'
import { Map, TileLayer, Marker } from 'react-leaflet'

const Wrapper = styled.div`
.leaflet-container {
    height: 400px;
    width: 100%;
    z-index: 0;

}
`
const position = [4.36, -74.04]

class HumboldtMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zoom: false,
    }

    this.enableZoom = this.enableZoom.bind(this)
  }

  enableZoom() {
    this.setState({
      zoom: !this.state.zoom,
    })
  }

  render() {
    console.log(this.state.zoom)
    return (
      <Wrapper onClick={this.enableZoom}>
        <Map center={position} zoom={5} scrollWheelZoom={this.state.zoom}>
          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          {this.props.marker && <Marker position={this.props.marker} />}
        </Map>
      </Wrapper>
    )
  }
}

export default HumboldtMap
