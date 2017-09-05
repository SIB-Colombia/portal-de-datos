import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .active-filter{
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F3F8F8;
  }
`

export default class TaxonomicCategorySearchItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      open: true,
    }
    this.activeFilter = this.activeFilter.bind(this)
  }

  handleChange = (event, index, value) => this.setState({ value })
  activeFilter() { this.setState({ open: !this.state.open }) }

  render() {
    return (
      <Wrapper>
        <FileSearchItem title="Categoría taxonómica" onExpandChange={this.activeFilter}>
          <Grid fluid className="without-padding divider">
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox checked label="Especie" iconStyle={{ fill: theme.palette.basescale[6] }} />
              </Col>
            </Row>
          </Grid>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <Grid fluid className="without-padding">
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Reino" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Filo" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Clase" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Orden" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Familia" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Género" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
            {/* <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Especie" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row> */}
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Subespecie" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Variedad" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
          </Grid>
        </FileSearchItem>
        {this.state.open && <Grid fluid style={{ paddingTop: 10, paddingBottom: 10, background: '#F3F8F8' }}>
          <Row middle="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Checkbox checked label="Especie" iconStyle={{ fill: theme.palette.basescale[6] }} />
            </Col>
          </Row>
        </Grid>}
      </Wrapper>
    )
  }
}
