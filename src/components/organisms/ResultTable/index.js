import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ResultRow } from 'components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'

const Wrapper = styled.div`
    margin: 20px 0px;
    text-align: center;

    .font {
        color: #4B5353 !important;
        font-size: 15px !important;
    }

    .small{
      width: 110px !important;
    }

    .large {
      width: 200px !important;
    }

    .pagination {
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
              <TableHeaderColumn className="font">Departamento</TableHeaderColumn>
              <TableHeaderColumn className="font">Coordenadas</TableHeaderColumn>
              <TableHeaderColumn className="font">Tipo de Registro</TableHeaderColumn>
              <TableHeaderColumn className="font small">Mes y Año</TableHeaderColumn>
              <TableHeaderColumn className="font large">Conjunto de datos</TableHeaderColumn>
              <TableHeaderColumn className="font small">Rank</TableHeaderColumn>
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
