import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'components';
import { palette } from 'styled-theme';

const Wrapper = styled.footer`

    .creative {
        right: 0;
        bottom: 0;
        left: 0;
        padding: 15px 0px;
        background-color: #000000;
        text-align: center;
        color:${palette('option', 0)};
        font-weight: 200;
    }

    .sib {
        background-color: #00292B;
        color: #FFFFFF;
        padding: 30px;
    }

    .access-direct {
        background-color: #00484D;
        text-align: center;
        color: #FFFFFF;
        padding: 100px;
    }

    a{
        margin:0px 5px;
        font-size: 18px;
        color:${palette('option', 0)};
        text-decoration: none;
    }
`
const FooterPage = (props) => {
    return (
        <Wrapper>
            <Grid fluid className="access-direct">
                <Row around="md">
                    <Col md><strong>CATÁLOGO</strong> DE LA BIODIVERSIDAD</Col>
                    <Col md>PORTAL DE <strong>DATOS</strong></Col>
                    <Col md><strong>COLECCIONES</strong> EN LÍNEA</Col>
                    <Col md><strong>LISTAS</strong> DE ESPECIES</Col>
                </Row>
            </Grid>
            <Grid fluid className="sib">
                <Row middle="md">
                    <img src="/SiB-Footer-02.svg" alt="Sistema de Información sobre Biodiversidad de Colombia" width="300" />
                    <Col md mdOffset={8}>
                        <Link>Sobre el portal</Link> | <Link>Terminos de uso</Link>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid className="creative">
                <Row around="md">
                    <Col xs={12} sm={6} md={6} lg={6}>
                        Creative Commons 4.0 · 2015
                    </Col>
                </Row>
            </Grid>
        </Wrapper>
    )
}
export default FooterPage;
