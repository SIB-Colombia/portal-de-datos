import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'

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
        <TableRowColumn style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{this.props.registro.canonical}</TableRowColumn>
        <TableRowColumn>{this.props.registro.department_interpreted}</TableRowColumn>
        <TableRowColumn>{this.props.registro.location ? `${(this.props.registro.location.lat).toFixed(2)}, ${(this.props.registro.location.lon).toFixed(2)}` : 'null'}</TableRowColumn>
        <TableRowColumn>{this.props.registro.basis_of_record.name}</TableRowColumn>
        <TableRowColumn className="small">{`${this.props.registro.eventdate_start.substr(5, 2)} - ${this.props.registro.eventdate_start.substr(0, 4)}`}</TableRowColumn>
        <TableRowColumn className="large" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{this.props.registro.resource.alternate_identifier}</TableRowColumn>
        <TableRowColumn className="small">{this.props.registro.taxon_rank}</TableRowColumn>
        <TableRowColumn><FlatButton primary href={`/occurrence/${this.props.registro.id}`} label="Ver mas" /></TableRowColumn>
      </TableRow>
    )
  }
}

export default ResultRow
