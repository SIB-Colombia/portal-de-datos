import React from 'react'
import styled from 'styled-components'
import { PublisherRow } from 'components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
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

class PublisherTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: null,
      offset: null,
      limit: null,
      publishers: [],
    }
  }

  componentWillMount() {
    GBIFService.getPublisherList().then(data => {
      this.setState({
        publishers: data,
        count: data.count,
        limit: data.limit,
        offset: data.offset,
      })
    })
  }

  getNextOccurrencePage(page) {
    GBIFService.getPublisherList(page * 10).then(data => {
      this.setState({
        offset: data.offset / 10,
        count: data.count,
        limit: data.limit,
        publishers: data,
      })
    })
  }

  render() {
    const rows = (
      this.state.publishers && _.map(this.state.publishers.results, (publisher) => (
        <PublisherRow key={publisher.key} publisher={publisher} />
      ))
    )
    console.log(this.state.publishers)
    return (
      <Wrapper>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font">Publicador</TableHeaderColumn>
              <TableHeaderColumn className="font">Registros</TableHeaderColumn>
              <TableHeaderColumn className="font">Recursos</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {rows}
          </TableBody>
        </Table>
        <div className="pagination">
          <Pagination total={Math.ceil(this.state.count / this.state.limit)} current={this.state.offset} display={this.state.limit} onChange={number => this.getNextOccurrencePage(number)} />
        </div>
      </Wrapper>
    )
  }
}

export default PublisherTable
