import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ResultRow } from 'components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'

const Wrapper = styled.div`
margin-top: 15px;
    .font {
      color: #4B5353 !important;
      font-size: 15px !important;
      padding-left: 5px !important;      
      padding-right: 0px !important;
      word-wrap: break-word !important;
      white-space: normal !important;
    }

    .row {
      padding-left: 5px !important;      
      padding-right: 0px !important;
    }

    .large {
      word-wrap: break-word !important;
      white-space: normal !important;
    }

    .pagination {
      text-align: center;
        margin-top: 20px;
    }
`

class ResultTable extends React.Component {

  static propTypes = {
    results: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      total: 20,
      display: 7,
      number: 1,
    }
  }

  render() {
    return (
      <Wrapper>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font">Nombre Científico</TableHeaderColumn>
              <TableHeaderColumn className="font">País</TableHeaderColumn>
              <TableHeaderColumn className="font">Departamento</TableHeaderColumn>
              <TableHeaderColumn className="font">Coordenadas</TableHeaderColumn>
              <TableHeaderColumn className="font">Base del Registro</TableHeaderColumn>
              <TableHeaderColumn className="font">Fecha del Evento</TableHeaderColumn>
              <TableHeaderColumn className="font">Publicador</TableHeaderColumn>
              <TableHeaderColumn className="font">Nombre del Recurso</TableHeaderColumn>
              <TableHeaderColumn className="font">Categoría Taxonómica</TableHeaderColumn>
              <TableHeaderColumn className="font">Reino</TableHeaderColumn>
              <TableHeaderColumn className="font">Filo</TableHeaderColumn>
              <TableHeaderColumn className="font">Clase</TableHeaderColumn>
              <TableHeaderColumn className="font">Orden</TableHeaderColumn>
              <TableHeaderColumn className="font">Familia</TableHeaderColumn>
              <TableHeaderColumn className="font">Género</TableHeaderColumn>
              <TableHeaderColumn className="font">Epíteto Específico</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.results.map((registro) => (
              <ResultRow key={registro.id} registro={registro} />
            ))}
          </TableBody>
        </Table>
        <div className="pagination">
          <Pagination total={this.state.total} current={this.state.number} display={this.state.display} onChange={number => this.setState({ number })} />
        </div>
      </Wrapper>
    )
  }
}

export default ResultTable
