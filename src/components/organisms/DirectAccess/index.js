import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { DirectAccessItem } from 'components';

const Wrapper = styled.div`
    background-color: white;
`

class DirectAccess extends Component {

    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    titulo: 'Departamentos',
                    img: 'col_log.jpg',
                    descripcion: 'Explora los datos disponibles para cada departamento',
                    to: '/departamentos/'
                },
                {
                    titulo: 'Publicadores',
                    img: 'pub_log.jgp',
                    descripcion: 'Explora los datos a travéz de las entidades que comparten datos a atávez del SiB Colombia',
                    to: '/publicadores/'
                },
                {
                    titulo: 'Recursos',
                    img: 'rec_log.jpg',
                    descripcion: 'Explora a travez de los recursos disponibles en el portal',
                    to: '/recursos/'
                }
            ]
        }
    }

    render() {

        return (
            <Wrapper>
                <Grid>
                    <Row around="md">
                        {this.state.links.map((link, i) => (
                            <DirectAccessItem key={i} link={link} />
                        ))}
                    </Row>
                </Grid>
            </Wrapper>
        )
    }
}

export default DirectAccess