import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { TableRow, TableRowColumn } from 'material-ui/Table';

const Wrapper = styled.div`
`

class ResultRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <TableRow>
                    <TableRowColumn>{this.props.registro.nom_cientifico}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.departamento}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.coordenadas}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.tip_registro}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.mes_ano}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.conj_datos}</TableRowColumn>
                    <TableRowColumn>{this.props.registro.rank}</TableRowColumn>                    
                </TableRow>
        )
    }
}

export default ResultRow;
