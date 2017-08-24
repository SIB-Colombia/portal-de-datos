import React from 'react'
import styled from 'styled-components'
import { PublisherRow, Loading } from 'components'
import { Table, TableBody, TableRowColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import _ from 'lodash'
import * as GBIFService from '../../../services/GBIFService'
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
    return (
      <Wrapper>
        {this.state.publishers && <Table selectable={false} style={{ tableLayout: 'none' }}>
          <TableBody displayRowCheckbox={false} showRowHover>
            <TableRow>
              <TableRowColumn className="font">Publicador</TableRowColumn>
              <TableRowColumn className="font">Registros</TableRowColumn>
              <TableRowColumn className="font">Recursos</TableRowColumn>
            </TableRow>
            {
              this.state.publishers && _.map(this.state.publishers.results, (publisher) => (
                <PublisherRow key={publisher.key} publisher={publisher} />
              ))
            }
          </TableBody>
        </Table> || <Loading />}
        <div className="pagination">
          <Pagination total={Math.ceil(this.state.count / this.state.limit)} current={this.state.offset} display={this.state.limit} onChange={number => this.getNextOccurrencePage(number)} />
        </div>
      </Wrapper>
    )
  }
}

export default PublisherTable
