import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import { Link } from 'components'

class ResultRow extends React.Component {

  static propTypes = {
    registro: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  redirect(url) {
    window.location.href = url
  }

  render() {
    console.log("Id: ")
    console.log(this.props.registro.key)
    return (
      <TableRow hoverable onClick={() => this.redirect(`/occurrence/${this.props.registro.key}`)} className="hover">
        <TableRowColumn>{this.props.registro.species ? this.props.registro.species : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.country ? this.props.registro.country : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.stateProvince ? this.props.registro.stateProvince : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.location ? `${(this.props.registro.decimalLatitude).toFixed(2)}, ${(this.props.registro.decimalLongitude).toFixed(2)}` : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.basisOfRecord ? this.props.registro.basisOfRecord : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.year ? this.props.registro.year : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.institutionCode ? this.props.registro.institutionCode : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.identifier ? this.props.registro.identifier : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.taxonRank ? this.props.registro.taxonRank : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.kingdom ? this.props.registro.kingdom : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.phylum ? this.props.registro.phylum : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.class ? this.props.registro.class : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.order ? this.props.registro.order : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.family ? this.props.registro.family : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.genus ? this.props.registro.genus : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.specificEpithet ? this.props.registro.specificEpithet : ''}</TableRowColumn>
      </TableRow>
    )
  }
}

export default ResultRow
