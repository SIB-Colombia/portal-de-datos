import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import * as GBIFService from '../../../services/GBIFService'

export default class DatasetsRow extends React.Component {

  static propTypes = {
    recurso: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      count: null,
      publisherKey: null,
    }
  }

  componentDidMount() {
    GBIFService.getPublisherById(this.props.recurso.publishingOrganizationKey).then(data => {
      this.setState({ publisherKey: data.title })
    })

    GBIFService.getOccurrenceCount(this.props.recurso.key, 'dataset_key').then(data => {
      this.setState({ count: data.count })
    })
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.recurso.title}</TableRowColumn>
        <TableRowColumn>{this.state.count}</TableRowColumn>
        <TableRowColumn>{this.state.publisherKey}</TableRowColumn>
        <TableRowColumn><FlatButton primary href={`/datasets/${this.props.recurso.key}`} label="Ver mas" /></TableRowColumn>
      </TableRow>
    )
  }
}
