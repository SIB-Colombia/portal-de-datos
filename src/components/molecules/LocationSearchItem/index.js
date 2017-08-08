import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
`
export default class LocationSearchItem extends Component {

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
        <FileSearchItem title="Ubicación">
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
      </Wrapper>
    )
  }
}
