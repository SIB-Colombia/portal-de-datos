import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'

class PublisherRow extends React.Component {

  static propTypes = {
    publisher: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      publisher: this.props.publisher,
    }
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.state.publisher.publicador}</TableRowColumn>
        <TableRowColumn>{this.state.publisher.nRegistros}</TableRowColumn>
        <TableRowColumn>{this.state.publisher.nRecursos}</TableRowColumn>
      </TableRow>
    )
  }
}

export default PublisherRow
