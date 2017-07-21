import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'

export default class SpeciesRow extends Component {

  static propTypes = {
    species: PropTypes.any.isRequired,
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.species.count}</TableRowColumn>
        <TableRowColumn>{this.props.species.scientificName}</TableRowColumn>
        <TableRowColumn>{this.props.species.kingdomName}</TableRowColumn>
        <TableRowColumn>{this.props.species.phylumName}</TableRowColumn>
        <TableRowColumn>{this.props.species.className}</TableRowColumn>
        <TableRowColumn>{this.props.species.orderName}</TableRowColumn>
        <TableRowColumn>{this.props.species.familyName}</TableRowColumn>
      </TableRow>
    )
  }
}
