import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Drawer from 'material-ui/Drawer'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import { size, palette } from 'styled-theme'
import { List, ListItem } from 'material-ui/List'
import FilterList from 'material-ui/svg-icons/content/filter-list'
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up'
import Divider from 'material-ui/Divider'
import Chip from 'material-ui/Chip'

const Wrapper = styled.div`
  float: left;
  left: -32px;
  position: relative;
  width: 35px;

  .drawer{
    margin-top: 65px;

    .text-orange {
      color: ${palette('primary', 0)} !important;
      font-size: 17px !important;
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

const ChipList = styled.div`
  padding: 0px 5px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export default class ChipFilterList extends Component {
  static propTypes = {
    list: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      nestedList: false,
      list: [],
      chips: [],
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this)
  }

  componentWillMount() {
    this.setState({ list: this.props.list })
  }

  handleToggleMenu() {
    this.setState((prevState) => {
      return { open: !prevState.open }
    })
  }

  handleNestedListToggle() {
    this.setState((prevState) => {
      return { nestedList: !prevState.nestedList }
    })
  }

  handleAddChip(list, row, column) {
    this.chips = this.state.chips
    list.row = row
    list.column = column
    this.chips.push(list)
    this.setState({ chips: this.chips })
    this.list = this.state.list
    this.list[row].items.splice(column, 1)
    this.setState({ list: this.list })
  }

  handleRequestDelete(data) {
    this.chips = this.state.chips
    const chipToDelete = this.chips.map((chip) => chip.id).indexOf(data.id)
    this.chips.splice(chipToDelete, 1)
    this.setState({ chips: this.chips })
    this.list = this.state.list
    this.list[data.row].items.unshift(data)
    this.setState({ list: this.list })
  }

  rChip(data) {
    return (
      <Chip key={data.id} onRequestDelete={() => this.handleRequestDelete(data)} style={{ margin: 4 }}>
        {data.name}
      </Chip>
    )
  }

  render() {
    const lists = this.state.list.map((list, row) =>
      <ListItem
        key={row}
        className="text-orange"
        primaryText={list.category}
        initiallyOpen
        primaryTogglesNestedList
        nestedItems={list.items.map((listItem, column) => (
          <ListItem style={{ color: '#6f6f6f' }} key={column} primaryText={listItem.name} onTouchTap={() => this.handleAddChip(listItem, row, column)} />
        ))}
        rightIcon={this.state.nestedList ? <ArrowDropDown color="#FF7847" /> : <ArrowDropUp color="#FF7847" />}
        onNestedListToggle={this.handleNestedListToggle}
      />
    )
    return (
      <Wrapper>
        <div className="btnFilters animated fadeInLeft">
          <FloatingActionButton onTouchTap={this.handleToggleMenu} className="style-btn">
            <Menu />
          </FloatingActionButton>
        </div>
        <Drawer open={this.state.open} containerClassName="drawer" width={300}>
          <List>
            <ListItem primaryText="Filtros de búsqueda" leftIcon={<FilterList />} disabled />
            <Divider />
            <ListItem className="text-orange" primaryText="Filtros activos" disabled />
            <ChipList>
              {this.state.chips.map(this.rChip, this)}
            </ChipList>
            {lists}
          </List>
        </Drawer>
      </Wrapper>
    )
  }
}
