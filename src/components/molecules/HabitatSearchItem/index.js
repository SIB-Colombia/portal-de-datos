import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import Checkbox from 'material-ui/Checkbox'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AutoComplete from 'material-ui/AutoComplete'
import Divider from 'material-ui/Divider'
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

export default class HabitatSearchItem extends Component {

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
        <FileSearchItem title="Hábitat" onExpandChange={this.activeFilter}>
          <Grid fluid className="without-padding divider">
            <Row middle="xs">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox checked label="Páramo" iconStyle={{ fill: theme.palette.basescale[6] }} />
              </Col>
            </Row>
          </Grid>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <AutoComplete
            hintText="Escriba el nombre del hábitat"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
        </FileSearchItem>
        {this.state.open && <Grid fluid style={{ paddingTop: 10, paddingBottom: 10, background: '#F3F8F8' }}>
          <Row middle="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Checkbox checked label="Páramo" iconStyle={{ fill: theme.palette.basescale[6] }} />
            </Col>
          </Row>
        </Grid>}
      </Wrapper>
    )
  }
}
