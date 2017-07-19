import React from 'react'
import PropTypes from 'prop-types'

import { TableRow, TableRowColumn } from 'material-ui/Table'

class ResultRow extends React.Component {

  static propTypes = {
    registro: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.registro.canonical}</TableRowColumn>
        <TableRowColumn>{this.props.registro.department_interpreted}</TableRowColumn>
        <TableRowColumn>{ this.props.registro.location ? `${(this.props.registro.location.lat).toFixed(2)}, ${(this.props.registro.location.lon).toFixed(2)}` : 'null'}</TableRowColumn>
        <TableRowColumn>{this.props.registro.basis_of_record.name}</TableRowColumn>
        <TableRowColumn>{`${this.props.registro.eventdate_start.substr(5, 2)} - ${this.props.registro.eventdate_start.substr(0, 4)}`}</TableRowColumn>
        <TableRowColumn style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
          {`
            ${this.props.registro.resource.alternate_identifier},
            ${this.props.registro.resource.citation},
          `}
          {/*
            ${this.props.registro.resource.description},
            ${this.props.registro.resource.gbif_package_id},
            ${this.props.registro.resource.hierarchy_level},
            ${this.props.registro.resource.id},
            ${this.props.registro.resource.intellectual_rights},
            ${this.props.registro.resource.keyword},
            ${this.props.registro.resource.keyword_thesaurus},
            ${this.props.registro.resource.lenguage},
            ${this.props.registro.resource.logo_url},
            ${this.props.registro.resource.name},
            ${this.props.registro.resource.publication_date},
            ${this.props.registro.resource.title},
          */}
        </TableRowColumn>
        <TableRowColumn>{this.props.registro.taxon_rank}</TableRowColumn>
      </TableRow>
    )
  }
}

export default ResultRow
