import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { ResultRow } from 'components';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import Pagination from 'material-ui-pagination';

const Wrapper = styled.div`
    margin: 20px 0px;
    text-align: center;

    .font {
        color: #4B5353 !important;
        font-size: 15px !important;    
    }

    .pagination {
        margin-top: 20px;
    }
`

class ResultTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 20,
            display: 7,
            number: 1,
            registros: [
                {
                    'nom_cientifico': 'Sambucus nigra L.',
                    'departamento': 'Colombia',
                    'coordenadas': '4.7N, 74.1W',
                    'tip_registro': 'Human Obrservation',
                    'mes_ano': '2017 January',
                    'conj_datos': 'iNaturalist Research-grade Observations',
                    'rank': 'Species'
                },
                {
                    'nom_cientifico': 'Sambucus nigra L.',
                    'departamento': 'Colombia',
                    'coordenadas': '4.7N, 74.1W',
                    'tip_registro': 'Human Obrservation',
                    'mes_ano': '2017 January',
                    'conj_datos': 'iNaturalist Research-grade Observations',
                    'rank': 'Species'
                }
            ]
        }
    }

    render() {

        return (
            <Wrapper>
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn className="font"> Nombre Científico</TableHeaderColumn>
                            <TableHeaderColumn className="font">Departamento</TableHeaderColumn>
                            <TableHeaderColumn className="font">Coordenadas</TableHeaderColumn>
                            <TableHeaderColumn className="font">Tipo de Registro</TableHeaderColumn>
                            <TableHeaderColumn className="font">Mes y Año</TableHeaderColumn>
                            <TableHeaderColumn className="font">Conjunto de datos</TableHeaderColumn>
                            <TableHeaderColumn className="font">Rank</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.state.registros.map((registro, i) => (
                            <ResultRow key={i} registro={registro} />
                        ))}
                    </TableBody>
                </Table>
                <div className="pagination" >
                    <Pagination
                        total={this.state.total}
                        current={this.state.number}
                        display={this.state.display}
                        onChange = { number => this.setState({ number }) }
                    />
                </div>
            </Wrapper>
        )
    }
}

export default ResultTable;
