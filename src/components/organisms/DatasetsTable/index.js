import React from 'react'
import styled from 'styled-components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import { DatasetsRow } from 'components'
import * as DatasetsService from '../../../services/DatasetsService'

const Wrapper = styled.div `
  text-align: center;
  margin: 20px 0px;
  .font {
      color: #4B5353 !important;
      font-size: 15px !important;
  }

  .pagination {
    margin-top: 20px;
  }
`

export default class DatasetsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recursos: [],
    }
  }

  componentWillMount() {
    this.setState({ recursos: DatasetsService.getRecursos() })
  }

  render() {
    return (
      <Wrapper>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font">Occurrences</TableHeaderColumn>
              <TableHeaderColumn className="font">Dataset</TableHeaderColumn>
              <TableHeaderColumn className="font">Publisher</TableHeaderColumn>
              <TableHeaderColumn className="font">Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.recursos.map((recurso) => (
              <DatasetsRow key={recurso.id} recurso={recurso} />
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
