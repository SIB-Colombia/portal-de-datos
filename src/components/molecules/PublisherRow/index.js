import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'


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
        <TableRowColumn>{this.state.publisher.providerName}</TableRowColumn>
        <TableRowColumn>{this.state.publisher.resourceCount}</TableRowColumn>
        <TableRowColumn>{this.state.publisher.registryCount}</TableRowColumn>
        <TableRowColumn><FlatButton primary href={`/provider/${this.props.publisher.id}`} label="Ver mas" /></TableRowColumn>
      </TableRow>
    )
  }
}

export default PublisherRow
