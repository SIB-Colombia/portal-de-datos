import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'components';
import { palette } from 'styled-theme';

const Wrapper = styled.footer`
    position: ${window.innerHeight > window.outerHeight ? 'fixed' : 'relative'};
    bottom: 0;
    right: 0;
    left: 0;
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
        text-align: left;
        padding: 70px;
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
                    <Col md>
                        <Grid fluid >
                            <Row middle="md" center="md">
                                <Col md={2}>
                                    <img src="/home/catalogo.png" />
                                </Col>
                                <Col md={6}>
                                    <strong>CATÁLOGO</strong> DE LA BIODIVERSIDAD
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col md>
                        <Grid fluid >
                            <Row middle="md" center="md">
                                <Col md={2}>
                                    <img src="/home/portal.png" />
                                </Col>
                                <Col md={4}>
                                    PORTAL DE <strong>DATOS</strong>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col md>
                        <Grid fluid >
                            <Row middle="md" center="md">
                                <Col md={3}>
                                    <img src="/home/colecciones.png" />
                                </Col>
                                <Col md={3}>
                                    <strong>COLECCIONES</strong> EN LÍNEA

                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col md>
                        <Grid fluid >
                            <Row middle="md" center="md">
                                <Col md={2}>
                                    <img src="/home/listas.png" />
                                </Col>
                                <Col md={4}>
                                    <strong>LISTAS</strong> DE ESPECIES

                                </Col>
                            </Row>
                        </Grid>
                    </Col>
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
