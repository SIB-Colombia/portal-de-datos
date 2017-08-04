import React from 'react'
import styled from 'styled-components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import { DatasetsRow } from 'components'
import _ from 'lodash'
import * as GBIFService from '../../../services/GBIFService'

const Wrapper = styled.div`
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
      count: null,
      limit: null,
      offset: null,
    }
    this.occurrences = []
  }

  componentWillMount() {
    GBIFService.getDatasetList().then(data => {
      this.setState({
        recursos: data.results,
        count: data.count,
        limit: data.limit,
        offset: data.offset,
      })
    })
  }

  getNextOccurrencePage(page) {
    GBIFService.getDatasetList(page * 10).then(data => {
      this.setState({
        recursos: data.results,
        count: data.count,
        limit: data.limit,
        offset: data.offset / 10,
      })
    })
  }

  render() {
    const rows = (
      this.state.recursos && _.map(this.state.recursos, (recurso) => (
        <DatasetsRow key={recurso.key} recurso={recurso} />
      ))
    )
    return (
      <Wrapper>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font">Nombre del Recurso</TableHeaderColumn>
              <TableHeaderColumn className="font">Registros</TableHeaderColumn>
              <TableHeaderColumn className="font">Publicador</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {rows}
          </TableBody>
        </Table>
        <div className="pagination">
          <Pagination total={Math.ceil(this.state.count / this.state.limit)} current={this.state.offset - 9} display={this.state.limit} onChange={number => this.getNextOccurrencePage(number + 10)} />
        </div>
      </Wrapper>
    )
  }
}
