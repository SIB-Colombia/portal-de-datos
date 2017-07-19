import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid';


const Wrapper = styled.div`
    margin-top: 70px;
    margin-bottom: 100px;

    .titulo {
        font-weight: 400;
        font-size: 30px;
        text-align: center;
        color: #4B5353;
    }

    .accent-title {
        margin-top: 15px;
        border-top: 2px solid #ff7847;
    }

    .descripcion {
        width: 330px;
        text-align: center;
        color: #545859;
        font-size: 20px;
        font-weight: 200;        
    }

`
class DirectAccessItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Wrapper>
                <Col md className="titulo">
                    {this.props.link.titulo}
                </Col>
                <Col className="accent-title" mdOffset={4} md={4}></Col>
                <Col md style={{ textAlign: 'center', padding: 30 }}>
                    <img src={this.props.link.img} width="60%"/>
                </Col>
                <Col md className="descripcion">
                    <i>{this.props.link.descripcion}</i>
                </Col>
            </Wrapper>
        )
    }
}

export default DirectAccessItem;
