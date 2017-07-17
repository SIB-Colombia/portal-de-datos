import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { BiologicalItem } from 'components';

const Wrapper = styled.div` 
    margin-top: 85px;
    margin-bottom: 130px;

    .title {
        font-weight: 400;
        font-size: 30px;
        padding-left: 30px;
        color: #4B5353;
    }

    .accent-title {
        margin-top: 15px;
        border-top: 2px solid #ff7847;
    }
`

class BiologicalGroups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: [
                { id: '0', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-invertebrados.png', title: 'INVERTEBRADOS' },
                { id: '1', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-vertebrados.png', title: 'VERTEBRADOS' },
                { id: '2', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-plantas.png', title: 'PLANTAS' },
                { id: '3', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-hongos.png', title: 'HONGOS' },
                { id: '4', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-chromista.png', title: 'CHROMISTA' },
                { id: '5', img: 'https://s3.amazonaws.com/sib-resources/images/catalogo/inicio/png/h-otros.png', title: 'OTROS' }
            ]
        }
    }

    render() {
        return (
            <Wrapper>
                <Grid>
                    <Row>
                        <Col className="title" md={12}>Explora los datos a travéz de grupos biológicos</Col>
                        <Col className="accent-title" md={1}></Col>
                    </Row>
                    <Row style={{ marginTop: 50 }} between="md">
                        {this.state.groups.map((group, i) => (
                            <BiologicalItem key={i} group={group}/>
                        ))}
                    </Row>
                </Grid>
            </Wrapper>
        )
    }
}

export default BiologicalGroups
