import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Slider from 'material-ui/Slider'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled.div`
`

export default class ElevationSearchItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }
  }

  handleChange = (event, index, value) => this.setState({ value })

  render() {
    return (
      <Wrapper>
        <FileSearchItem title="Elevación">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            labelStyle={{ color: '#838787' }}
            underlineStyle={{ borderColor: '#FF7847' }}
            iconStyle={{ fill: '#838787' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
          >
            <MenuItem value={1} primaryText="Sin filtro" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <Grid fluid className="without-padding">
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>720</Col>
              <Col xs={6} sm={6} md={6} lg={6}>9999</Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Slider style={{ height: 100 }} axis="y" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <Slider style={{ height: 100 }} axis="y" />
              </Col>
            </Row>
            <Divider className="separated" />
            <Row>
              <Col md><RaisedButton label="Limpiar" /></Col>
              <Col md><RaisedButton label="Añadir" primary /></Col>
            </Row>
          </Grid>
        </FileSearchItem>
      </Wrapper>
    )
  }
}
