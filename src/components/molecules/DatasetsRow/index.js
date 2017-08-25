import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
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

  redirect(url) {
    window.location.href = url
  }

  render() {
    return (
      <TableRow hoverable onClick={() => this.redirect(`/dataset/${this.props.recurso.key}`)} className="hover">
        <TableRowColumn>{this.props.recurso.title && `${(this.props.recurso.title).substring(0, 40)}...`}</TableRowColumn>
        <TableRowColumn>{this.state.count}</TableRowColumn>
        <TableRowColumn>{this.state.publisherKey && `${(this.state.publisherKey).substring(0, 40)}...`}</TableRowColumn>
      </TableRow>
    )
  }
}
