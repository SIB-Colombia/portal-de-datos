import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'

export default class SpeciesRow extends Component {

  static propTypes = {
    species: PropTypes.any.isRequired,
  }

  render() {
    return (
      <TableRow hoverable className="hover">
        <TableRowColumn>{this.props.species.count}</TableRowColumn>
        <TableRowColumn>{this.props.species.scientificName}</TableRowColumn>
        <TableRowColumn>{this.props.species.kingdom}</TableRowColumn>
        <TableRowColumn>{this.props.species.phylum}</TableRowColumn>
        <TableRowColumn>{this.props.species.class}</TableRowColumn>
        <TableRowColumn>{this.props.species.order}</TableRowColumn>
        <TableRowColumn>{this.props.species.family}</TableRowColumn>
        <TableRowColumn>{this.props.species.genus}</TableRowColumn>
        <TableRowColumn>{this.props.species.specificEpithet}</TableRowColumn>
      </TableRow>
    )
  }
}
