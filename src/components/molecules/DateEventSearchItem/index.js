import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled.div`
`

export default class DateEventSearchItem extends Component {

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
        <FileSearchItem title="Fecha del evento">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            labelStyle={{ color: '#838787' }}
            underlineStyle={{ borderColor: '#FF7847' }}
            iconStyle={{ fill: '#838787' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
          >
            <MenuItem value={1} primaryText="Entre" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <Grid fluid className="without-padding">
            <Row>
              <Col md>
                <DatePicker
                  hintText="Fecha inicio"
                  mode="landscape"
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>Y</Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <DatePicker
                  hintText="Fecha fin"
                  mode="landscape"
                />
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
