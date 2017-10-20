import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ResultRow, Loading } from 'components'
import { Table, TableBody, TableRowColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import _ from 'lodash'

import * as DataPortalService from '../../../services/DataPortalService'
import * as GBIFService from '../../../services/GBIFService';

import theme from '../../themes/default'


const Wrapper = styled.div`
margin-top: 15px;
  .font {
    color: ${theme.palette.grayscale[7]} !important;
    font-size: 15px !important;
  }

  .pagination {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  div:not(:first-child) {
    overflow-x: visible !important;
    overflow-y: visible !important;
  }

  .hover {
    cursor: pointer;
  }
`

export default class ResultTable extends React.Component {

  static propTypes = {
    id: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      display: null,
      current: null,
      total: null,
      result: [],
    }
  }

  componentWillMount() {
    GBIFService.getOccurrenceSearch(this.props.id).then(data => {
    //DataPortalService.getOccurrenceSearch(this.props.id).then(data => {
      console.log("Los resultados de GBIF son: ")
      console.log(data)

      
      this.setState({
        display: 10,
        current: data.offset,
        total: data.count,
        result: data.results,
      })
      
      this.props.handleCantidadRecursos(data.count)
      
      
    })
  }

  getNextOccurrencePage(offset) {
  
    console.log("Consulta a la siguiente pagina")
    GBIFService.getOccurrenceSearch(this.props.id, offset + 10).then(data => {
    //DataPortalService.getOccurrenceSearch(this.props.id, offset + 10).then(data => {
      console.log("Los resultados de GBIF paginados: ")
      console.log(data)
      this.setState({
        display: 10,
        current: data.offset - 10,
        total: data.count,
        result: data.results,
      })
      this.props.handleCantidadRecursos(data.count)
    })
  }

  render() {
    console.log("total")
    console.log(this.state.total)
    console.log("Display")
    console.log(this.state.display)
    console.log("Current")
    console.log(this.state.current)
    return (
    
    
      <Wrapper>
        {this.state.result &&
          <Table selectable={false} style={{ tableLayout: 'none' }}>
            <TableBody displayRowCheckbox={false} showRowHover>
              <TableRow>
                <TableRowColumn className="font">Nombre Científico</TableRowColumn>
                <TableRowColumn className="font">País</TableRowColumn>
                <TableRowColumn className="font">Departamento</TableRowColumn>
                <TableRowColumn className="font">Coordenadas</TableRowColumn>
                <TableRowColumn className="font">Base del Registro</TableRowColumn>
                <TableRowColumn className="font">Fecha del Evento</TableRowColumn>
                <TableRowColumn className="font">Publicador</TableRowColumn>
                <TableRowColumn className="font">Nombre del Recurso</TableRowColumn>
                <TableRowColumn className="font">Categoría Taxonómica</TableRowColumn>
                <TableRowColumn className="font">Reino</TableRowColumn>
                <TableRowColumn className="font">Filo</TableRowColumn>
                <TableRowColumn className="font">Clase</TableRowColumn>
                <TableRowColumn className="font">Orden</TableRowColumn>
                <TableRowColumn className="font">Familia</TableRowColumn>
                <TableRowColumn className="font">Género</TableRowColumn>
                <TableRowColumn className="font">Epíteto Específico</TableRowColumn>
              </TableRow>
              {this.state.result && _.map(this.state.result, (registro) => (
                <ResultRow key={registro.key} registro={registro} />
              ))}
            </TableBody>
          </Table>
          || <Loading />
        }
        <div className="pagination">
          <Pagination total={Math.ceil((this.state.total) / this.state.display)} current={this.state.current} display={this.state.display} onChange={number => this.getNextOccurrencePage(number)} />
        </div>
      </Wrapper>
    )
  }
}
