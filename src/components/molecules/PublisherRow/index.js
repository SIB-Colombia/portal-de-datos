import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import * as GBIFService from '../../../services/GBIFService'

class PublisherRow extends React.Component {

  static propTypes = {
    publisher: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      publisher: this.props.publisher,
      countO: null,
    }
  }

  componentDidMount() {
    GBIFService.getOccurrenceCount(this.props.publisher.key, 'publishing_org').then(data => {
      this.setState({ countO: data.count })
    })

    GBIFService.getDatasetsCount(this.props.publisher.key).then(data => {
      this.setState({ countD: data.count })
    })
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.state.publisher.title}</TableRowColumn>
        <TableRowColumn>{this.state.countO}</TableRowColumn>
        <TableRowColumn>{this.state.countD}</TableRowColumn>
        <TableRowColumn><FlatButton primary href={`/provider/${this.props.publisher.id}`} label="Ver mas" /></TableRowColumn>
      </TableRow>
    )
  }
}

export default PublisherRow
