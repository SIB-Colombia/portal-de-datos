import React from 'react'
import styled from 'styled-components'
import { PublisherRow } from 'components'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import * as PublisherService from '../../../services/PublisherService'

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
      total: 20,
      display: 7,
      number: 1,
      publishers: [],
    }
  }

  componentWillMount() {
    PublisherService.getPublishers().then(data => {
      this.setState({
        publishers: data,
      })
    })
  }

  render() {
    return (
      <Wrapper>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="font">Publicador</TableHeaderColumn>
              <TableHeaderColumn className="font"># de Registros</TableHeaderColumn>
              <TableHeaderColumn className="font"># de Recursos</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.publishers.map((publisher, i) => (
              <PublisherRow key={i} publisher={publisher} />
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

export default PublisherTable
