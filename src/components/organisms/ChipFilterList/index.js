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
import _ from 'lodash'

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
    position: PropTypes.any.isRequired,
    polygon: PropTypes.any.isRequired,
    init: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      nestedList: false,
      list: [],
      chip: null,
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this)
  }

  componentWillMount() {
    this.setState({ list: this.props.list })
  }
  componentDidMount() {
    const list = _.find(this.state.list[0].items, { iso_department_code: this.props.init })
    if (list) this.handleAddChip(list, 0, 0)
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

  handleAddChip(chip, row) {
    this.redirect(chip.iso_department_code)
    this.list = this.state.list
    const oldChip = this.state.chip
    this.setState({ chip })
    const item = this.list[row].items.splice(_(this.list[0].items).findIndex({ id: chip.id }), 1)
    if (oldChip) this.list[row].items.unshift(oldChip)
    // _(this.list[row].items).sortBy((o) => { return o.name })
    this.setState({ list: this.list })
    this.coor = []
    item[row].coor.map((x) => this.coor.push(parseFloat(x)))
    this.props.position(this.coor)
    this.props.polygon(chip.id)
  }

  rCHip = (data) => {
    return (
      <Chip className="animated fadeIn" style={{ marginLeft: 10 }}>
        {data.name}
      </Chip>
    )
  }

  redirect = (path) => {
    if (window.location.pathname !== `/departments/${path}`) {
      window.location.href = `/departments/${path}`
    }
  }

  render() {
    const lists = this.state.list.map((list, row) => {
      return (
        <ListItem
          key={row}
          className="text-orange"
          primaryText={list.category}
          initiallyOpen
          primaryTogglesNestedList
          nestedItems={list.items.map((listItem) => (
            <ListItem
              key={listItem.id}
              style={{ color: '#6f6f6f' }}
              primaryText={listItem.name}
              onTouchTap={() => this.handleAddChip(listItem, row)}
            />
          ))}
          rightIcon={this.state.nestedList ? <ArrowDropDown color="#FF7847" /> : <ArrowDropUp color="#FF7847" />}
          onNestedListToggle={this.handleNestedListToggle}
        />
      )
    })

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
            <ListItem className="text-orange" primaryText="Filtro activo" disabled />
            <ChipList>
              {this.state.chip && this.rCHip(this.state.chip)}
            </ChipList>
            {lists}
          </List>
        </Drawer>
      </Wrapper>
    )
  }
}
