import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import AutoComplete from 'material-ui/AutoComplete'
import theme from '../../themes/default'

const Wrapper = styled.div`
`

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}

export default class LocationSearchItem extends Component {

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
        <FileSearchItem title="Ubicación" onExpandChange={this.activeFilter}>
          <Grid fluid className="without-padding divider">
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox checked label="Amazonas" iconStyle={{ fill: theme.palette.basescale[6] }} />
              </Col>
            </Row>
          </Grid>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            labelStyle={{ color: '#838787' }}
            underlineStyle={{ borderColor: '#FF7847' }}
            iconStyle={{ fill: '#838787' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
          >
            <MenuItem value={1} primaryText="País" />
            <MenuItem value={2} primaryText="Departamento" />
            <MenuItem value={3} primaryText="*Municipio" />
            <MenuItem value={4} primaryText="*Localidad" />
          </SelectField>
          <AutoComplete
            hintText="Escriba el nombre del país"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
          <Grid fluid className="without-padding">
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Amazonas" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Chocó" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={6} lg={6}>
                <Checkbox label="Santander" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
          </Grid>
        </FileSearchItem>
        {this.state.open && <Grid fluid style={{ paddingTop: 10, paddingBottom: 10, background: '#F3F8F8' }}>
          <Row middle="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Checkbox checked label="Amazonas" iconStyle={{ fill: theme.palette.basescale[6] }} />
            </Col>
          </Row>
        </Grid>}
      </Wrapper>
    )
  }
}
