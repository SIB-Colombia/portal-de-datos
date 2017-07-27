import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Map, TileLayer, FeatureGroup, LayersControl, GeoJSON } from 'react-leaflet'
import { ShapeFile } from 'react-leaflet-shapefile'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import {
  PageTemplate,
  Header,
  Footer,
  ChipFilterList,
  Link,
} from 'components'
import _ from 'lodash'
import * as DataPortalService from '../../../services/DataPortalService'
import GeoData from '../../../../public/Colombia.geo.json'

const { BaseLayer, Overlay } = LayersControl

const Wrapper = styled.div`
  .title {
    font-weight: 400;
    font-size: 30px;
    padding-left: 30px;
    color: #4B5353;
    margin-top:40px;
  }

  .sub-title {
    font-size: 23px;
    color: #4B5353;
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid #ff7847;
  }

  .paper {
      color: #3E5151;
      font-size: 24px;
      padding: 10px;
      margin: 30px 0px;

      a {
        color: #3E5151;
        fontWeight: 200;
        font-size: 18px;
        .number {
            font-weight: 400;
            font-size: 28px;
        }
      }

      div:not(:first-child){
        border-left: 1px solid rgb(224, 224, 224);
      }
  }

  .leaflet-container {
    height: 500px;
    width: 100%;
    z-index: 0;
  }

  .map {
    margin-bottom: 50px;
  }
`

export default class DepartmentsPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      departments: null,
      geodata: null,
      isadded: false,
      position: null,
      polygons: null,
    }

    this.handleFile = this.handleFile.bind(this)
    this.readerLoad = this.readerLoad.bind(this)
    this.position = this.position.bind(this)
    this.polygon = this.polygon.bind(this)
  }

  componentWillMount() {
    DataPortalService.getRegistryDepartment(this.props.match.params.id).then(departments => {
      const list = [{ category: 'Departamentos', items: [] }]
      _.forEach(departments, (value, key) => {
        list[0].items[key] = { id: key, name: value.department_name, coor: [value.lat, value.lng], iso_department_code: value.iso_department_code }
      })
      this.setState({ departments: list })
    })
  }

  handleFile(e) {
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onload = function (upload) {
      this.readerLoad(upload)
    }.bind(this)
    reader.readAsArrayBuffer(file)
  }

  readerLoad(e) {
    this.setState({ geodata: e.target.result })
    this.setState({ isadded: true })
  }

  position(p) {
    this.setState({
      position: p,
    })
  }

  polygon(id) {
    const GeoJson = _.sortBy(GeoData.features, (o) => {
      return o.properties.NOMBRE_DPT
    })

    this.setState({ polygons: GeoJson[id] })
  }

  render() {
    let ShapeLayers = null
    if (this.state.isadded === true) {
      ShapeLayers = (
        <Overlay checked name="Feature group">
          <FeatureGroup>
            <ShapeFile data={this.state.geodata} isArrayBufer />
          </FeatureGroup>
        </Overlay>
      )
    }

    return (
      <Wrapper>
        <PageTemplate header={<Header filter={this.state.departments && <ChipFilterList list={this.state.departments} position={this.position} polygon={this.polygon} init={this.props.match.params.depart} />} />} footer={<Footer />}>
          <Grid>
            <Row>
              <Col className="title" md={12}>Departamentos</Col>
              <Col className="accent-title" md={1} />
            </Row>
          </Grid>
          {/* this.state.departments && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <DepartmentList departments={this.state.departments} />
            </Col>
          </Row>
        </Grid>*/}
          <Grid>
            <Row center="md">
              {this.state.polygons && <Col className="sub-title" md={12}>{(this.state.polygons.properties.NOMBRE_DPT).charAt(0).toUpperCase() + (this.state.polygons.properties.NOMBRE_DPT).slice(1).toLowerCase()}</Col>}
              <Col className="accent-title" md={1} />
            </Row>
            <Divider />
            <Paper>
              <Row className="paper" center="xs">
                <Col xs={12} sm={6} md={4} lg={3}><Link to="#"><span className="number">687.900</span> REGISTROS</Link></Col>
                <Col xs={12} sm={6} md={4} lg={3}><Link to="#"><span className="number">2.500</span> RECURSOS</Link></Col>
                <Col xs={12} sm={6} md={4} lg={3}><Link to="#"><span className="number">1.800</span> PUBLICADORES</Link></Col>
                <Col xs={12} sm={6} md={12} lg={3}><Link to="#"><span className="number">5.350</span> ESPECIES</Link></Col>
              </Row>
            </Paper>
          </Grid>
          <Grid className="map">
            {/* <div>
              <input type="file" onChange={this.handleFile.bind(this)} className="inputfile" />
            </div>*/}
            <Paper>
              <Row>
                <Col md>
                  <Map center={this.state.position || [4.36, -74.04]} zoom={6.5}>
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

                    {/* <LayersControl position="topright">
                <BaseLayer checked name='OpenStreetMap.Mapnik'>
                  <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                </BaseLayer>
                {ShapeLayers}
              </LayersControl>*/}
                    {this.state.polygons && <GeoJSON data={this.state.polygons} />}
                  </Map>
                </Col>
              </Row>
            </Paper>
          </Grid>
        </PageTemplate>
      </Wrapper>
    )
  }
}
