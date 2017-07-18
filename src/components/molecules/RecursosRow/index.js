import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'

export default class RecursosRow extends React.Component {

  static propTypes = {
    recurso: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.recurso.occurrences}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.dataset}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.publisher}</TableRowColumn>
        <TableRowColumn>{this.props.recurso.type}</TableRowColumn>
      </TableRow>
    )
  }
}
