import React from 'react'
import styled from 'styled-components'
import { Table, TableBody, TableRowColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import { DatasetsRow, Loading } from 'components'
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
    return (
      <Wrapper>
        {this.state.recursos && <Table selectable={false} style={{ tableLayout: 'none' }}>
          <TableBody displayRowCheckbox={false} showRowHover>
            <TableRow>
              <TableRowColumn className="font">Nombre del Recurso</TableRowColumn>
              <TableRowColumn className="font">Registros</TableRowColumn>
              <TableRowColumn className="font">Publicador</TableRowColumn>
            </TableRow>
            {
              this.state.recursos && _.map(this.state.recursos, (recurso) => (
                <DatasetsRow key={recurso.key} recurso={recurso} />
              ))
            }
          </TableBody>
        </Table> || <Loading />}
        <div className="pagination">
          <Pagination total={Math.ceil(this.state.count / this.state.limit)} current={this.state.offset - 9} display={this.state.limit} onChange={number => this.getNextOccurrencePage(number + 10)} />
        </div>
      </Wrapper>
    )
  }
}
