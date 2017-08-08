import React, { Component } from 'react'
import styled from 'styled-components'
import { FileSearchItem } from 'components'
import AutoComplete from 'material-ui/AutoComplete'

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

export default class NameCollectorSearchItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <FileSearchItem title="Nombre del colector">
          <AutoComplete
            hintText="Escriba el nombre del colector"
            dataSource={colors}
            menuProps={menuProps}
            underlineStyle={{ borderColor: '#FF7847' }}
            underlineFocusStyle={{ borderColor: '#FF7847' }}
            hintStyle={{ color: '#838787' }}
          />
        </FileSearchItem>
      </Wrapper>
    )
  }
}
