import React, { PropTypes } from 'react';
import styled from 'styled-components';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

{/*import { ResultRow } from 'components';*/}

const Wrapper = styled.div`
    margin: 20px 0px;
`

class ResultTable extends React.Component {

    constructor(props) {
        super(props);
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
                            <TableHeaderColumn>Nombre Científico</TableHeaderColumn>
                            <TableHeaderColumn>Departamento</TableHeaderColumn>
                            <TableHeaderColumn>Coordenadas</TableHeaderColumn>
                            <TableHeaderColumn>Tipo de Registro</TableHeaderColumn>
                            <TableHeaderColumn>Mes y Año</TableHeaderColumn>
                            <TableHeaderColumn>Conjunto de datos</TableHeaderColumn>
                            <TableHeaderColumn>Rank</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {/* <ResultRow />*/}
                    </TableBody>
                </Table>
            </Wrapper>
        )
    }
}

export default ResultTable;
