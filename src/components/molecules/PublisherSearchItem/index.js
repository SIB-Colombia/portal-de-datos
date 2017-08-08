import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AutoComplete from 'material-ui/AutoComplete'
import Checkbox from 'material-ui/Checkbox'

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

export default class PublisherSearchItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <FileSearchItem title="Publicador">
          <AutoComplete
            hintText="Escriba el nombre del publicador"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
          <Grid fluid className="without-padding">
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={9} lg={9}>
                <Checkbox label="Instituto Humboldt" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={9} lg={9}>
                <Checkbox label="Publicador 2" />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
            </Row>
            <Row between="xs" middle="xs">
              <Col xs={6} sm={6} md={9} lg={9}>
                <Checkbox label="Publicador mu..." />
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
            </Row>
          </Grid>
        </FileSearchItem>
      </Wrapper>
    )
  }
}
