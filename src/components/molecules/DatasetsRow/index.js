import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'

export default class DatasetsRow extends React.Component {

  static propTypes = {
    recurso: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.recurso.count}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.resourceName}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.providerName}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.type}</TableRowColumn>
      </TableRow>
    )
  }
}