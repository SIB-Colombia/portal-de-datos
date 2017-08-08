import React, { Component } from 'react'
import styled from 'styled-components'
import Drawer from 'material-ui/Drawer'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import { size, palette } from 'styled-theme'
import { List, ListItem } from 'material-ui/List'
import FilterList from 'material-ui/svg-icons/content/filter-list'
import IconButton from 'material-ui/IconButton'
import Replay from 'material-ui/svg-icons/av/replay'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import { FileSearchItem } from 'components'

const Wrapper = styled.div`
  float: left;
  left: -32px;
  position: relative;
  width: 35px;

  .drawer{
    margin-top: 65px;
    .paper > div:first-child {
        padding-bottom: 0px !important;
      }
    }
  }

  @media ${size('sm')}{
    position: absolute;
    left: 0;
    top:0;

    button{
      width: 30px !important;
    }
  }

  .style-btn{
    box-shadow: none !important;

    button{
      background-color: ${palette('primary', 0)} !important;
      height: 64px !important;
      border-radius: 0 !important;
    }
  }
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

export default class FileSearchFilter extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      dataSource: [],
      value: 1,
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleToggleMenu() {
    this.setState((prevState) => {
      return { open: !prevState.open }
    })
  }
  handleChange = (event, index, value) => this.setState({ value })

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    })
  };

  render() {
    return (
      <Wrapper>
        <div className="btnFilters animated fadeInLeft">
          <FloatingActionButton onTouchTap={this.handleToggleMenu} className="style-btn">
            <Menu />
          </FloatingActionButton>
        </div>
        <Drawer open={this.state.open} containerClassName="drawer" width={290}>
          <List>
            <ListItem primaryText="Filtros de búsqueda" leftIcon={<FilterList />} rightIcon={<IconButton className="material-icons" style={{ padding: 0, boxSizing: 'none' }} tooltip="Reiniciar filtros" tooltipPosition="bottom-left"><Replay /></IconButton>} disabled />
          </List>
          <FileSearchItem title="Taxonomía">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Nombre científico" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <AutoComplete
              hintText="Escriba el nombre científico"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
          </FileSearchItem>
        </Drawer>
      </Wrapper>
    )
  }
}
