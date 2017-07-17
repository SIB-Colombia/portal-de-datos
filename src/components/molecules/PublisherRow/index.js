import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { TableRow, TableRowColumn } from 'material-ui/Table';

const Wrapper = styled.div`
`

class PublisherRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <TableRow>
                  <TableRowColumn>{this.props.publisher.nombre}</TableRowColumn>
                  <TableRowColumn>{this.props.publisher.nRegistros}</TableRowColumn>
                  <TableRowColumn>{this.props.publisher.nRecursos}</TableRowColumn>
                </TableRow>
        )
    }
}

export default PublisherRow;
