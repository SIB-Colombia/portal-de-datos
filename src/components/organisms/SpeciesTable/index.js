import React, { Component } from 'react'
import styled from 'styled-components'
import { Table, TableBody, TableRowColumn, TableRow } from 'material-ui/Table'
import Pagination from 'material-ui-pagination'
import { SpeciesRow, Loading } from 'components'
import * as SpeciesService from '../../../services/SpeciesService'
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

export default class SpeciesTable extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {
      total: 20,
      display: 7,
      number: 1,
      species: null,
    }
  }

  componentWillMount() {
    SpeciesService.getSpecies().then(data => {
      this.setState({ species: data })
    })
  }

  render() {
    return (
      <Wrapper>
        {this.state.species && <Table selectable={false} style={{ tableLayout: 'none' }}>
          <TableBody displayRowCheckbox={false} showRowHover>
            <TableRow>
              <TableRowColumn className="font">Registros</TableRowColumn>
              <TableRowColumn className="font">Nombre Cientifico</TableRowColumn>
              <TableRowColumn className="font">Reino</TableRowColumn>
              <TableRowColumn className="font">Filo</TableRowColumn>
              <TableRowColumn className="font">Clase</TableRowColumn>
              <TableRowColumn className="font">Orden</TableRowColumn>
              <TableRowColumn className="font">Familia</TableRowColumn>
              <TableRowColumn className="font">Generó</TableRowColumn>
              <TableRowColumn className="font">Epíteto Específico</TableRowColumn>
            </TableRow>
            {this.state.species.map((species, i) => (
              <SpeciesRow key={i} species={species} />
            ))}
          </TableBody>
        </Table> || <Loading />}
        <div className="pagination">
          <Pagination total={this.state.total} current={this.state.number} display={this.state.display} onChange={number => this.setState({ number })} />
        </div>
      </Wrapper>
    )
  }
}
