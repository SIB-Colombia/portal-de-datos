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
  
  ubicacion(r){
    var t = ""
    if (r.decimalLatitude){
      if (r.decimalLatitude>0)
        t += r.decimalLatitude.toFixed(2)+" N"
      else
        t += (-r.decimalLatitude).toFixed(2)+" S"
    }
    if (r.decimalLongitude){
      t += ", "
      if (r.decimalLongitude>0)
        t += r.decimalLongitude.toFixed(2)+" E"
      else
        t += (-r.decimalLongitude).toFixed(2)+" O"
    }
    return t
  }

  render() {
    console.log("Id: ")
    console.log(this.props.registro.key)
    return (
      <TableRow hoverable onClick={() => this.redirect(`/occurrence/${this.props.registro.key}`)} className="hover">
        <TableRowColumn>{this.props.registro.scientificName ? this.props.registro.scientificName : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.country ? this.props.registro.country : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.stateProvince ? this.props.registro.stateProvince : ''}</TableRowColumn>
        <TableRowColumn>{this.ubicacion(this.props.registro)}</TableRowColumn>
        <TableRowColumn>{this.props.registro.basisOfRecord ? this.props.registro.basisOfRecord : ''}</TableRowColumn>
        <TableRowColumn>{this.props.registro.eventDate ? this.props.registro.eventDate.substring(0, 10) : ''}</TableRowColumn>
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
