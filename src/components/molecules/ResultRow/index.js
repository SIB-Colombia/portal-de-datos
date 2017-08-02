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
        <TableRowColumn className="row large">{this.props.registro.canonical ? this.props.registro.canonical : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.country_name ? this.props.registro.country_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.department_interpreted}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.location ? `${(this.props.registro.location.lat).toFixed(2)}, ${(this.props.registro.location.lon).toFixed(2)}` : ''}</TableRowColumn>
        <TableRowColumn className="row large">{this.props.registro.basis_of_record.name ? this.props.registro.basis_of_record.name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.eventdate_start ? (this.props.registro.eventdate_start).slice(0, 10) : ''}</TableRowColumn>
        <TableRowColumn className="row large">{this.props.registro.provider.name ? this.props.registro.provider.name : ''}</TableRowColumn>
        <TableRowColumn className="row large">{this.props.registro.resource.name ? this.props.registro.resource.name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxon_rank ? this.props.registro.taxon_rank : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.kingdom_name ? this.props.registro.taxonomy.kingdom_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.phylum_name ? this.props.registro.taxonomy.phylum_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.class_name ? this.props.registro.taxonomy.class_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.order_name ? this.props.registro.taxonomy.order_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.family_name ? this.props.registro.taxonomy.family_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.genus_name ? this.props.registro.taxonomy.genus_name : ''}</TableRowColumn>
        <TableRowColumn className="row">{this.props.registro.taxonomy.specific_epithet ? this.props.registro.taxonomy.specific_epithet : ''}</TableRowColumn>
        <TableRowColumn className="row"><FlatButton primary href={`/occurrence/${this.props.registro.occurrenceid}`} label="Ver mas" /></TableRowColumn>
      </TableRow>
    )
  }
}

export default ResultRow
