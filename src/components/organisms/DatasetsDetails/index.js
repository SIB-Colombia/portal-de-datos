import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link, HumboldtMap, PaperItem, Doi, PrincipalDataset, TaxonomicCoverageSection, MethodologySection } from 'components'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import _ from 'lodash'

const Wrapper = styled.div`

  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }

  .paper {
    color: #3E5151;
    font-size: 18px;
    padding: 10px;
    font-weight: 200;

    div:not(:first-child){
      border-left: 1px solid rgb(224, 224, 224);
    }

    .number {
      font-weight: 400;
      font-size: 28px;   
    }
  }

  .information {
    margin: 30px 0px;

    .indice {
      padding: 15px;
    }

    .third-title {
      font-weight: 400;
      font-size: 24px;
      color: #3E5151;
      padding: 12px 0px;
    }

    .normal-info {
      padding: 30px;
      margin-bottom: 20px;

      .description {
        padding: 20px;
        line-height: 35px;
        font-weight: 200;

        .link {
          color: #008995;
          font-size: 17px;
        }
      }
    }
  }

  .leaflet-container {
    width: 100%;
    z-index: 0;
  }

  .link {
    color: #008995;
    font-size: 18px;
  }

  .contact-title{
      font-weight: 600;
      margin: 10px;
  }
  .box{
    border-left: 1px solid rgb(224, 224, 224);
    margin-left: 15px;
    padding-left: 20px;
    line-height: 35px;
  }

  .contacts {
    padding: 20px;
    color: #3E5151;
    .contact{
      padding: 20px;
    }
  }

  .fourd-title {
    font-weight: 600;
  }

  .separated {
    margin-bottom: 10px;
  }
`

export default class DatasetsDetails extends Component {
  render() {
    return (
      <Wrapper>
        <PrincipalDataset />
        <Paper className="separated">
          <Grid>
            <Row className="paper" center="xs">
              <Col xs={12} sm={12} md={12} lg={12}><span className="number">546.321</span> REGISTROS</Col>
            </Row>
          </Grid>
          <HumboldtMap />
        </Paper>
        <Grid >
          <Row className="information">
            <Col xs={12} sm={12} md={3} lg={3}>
              <Paper className="indice">
                <List>
                  {_.map([
                    'Descripción',
                    'Temporal',
                    'Geográfica',
                    'Taxonómia',
                    'Método de muestreo',
                    'Información adicional',
                    'Bibliografía',
                    'Partes asociadas',
                    'Descripción de los datos',
                    'Registro en GBIF',
                    'Citación',
                  ], (key) => (<ListItem key={key}>{key}</ListItem>))}
                </List>
              </Paper>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9}>
              <Row>
                <PaperItem title="Descripción">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                </PaperItem>
                <PaperItem title="Cobertura temporal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                </PaperItem>
                <PaperItem title="Cobertura geográfica">
                  <HumboldtMap />
                </PaperItem>
                <PaperItem title="Cobertura taxonómica">
                  <TaxonomicCoverageSection />
                </PaperItem>
                <PaperItem title="Metodología">
                  <MethodologySection />
                </PaperItem>
                <PaperItem title="Bibliografía">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                </PaperItem>
                <PaperItem title="Cobertura geográfica">
                  <Row className="contacts">
                    {_.map([0, 1, 2], () => (
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12} className="contact-title">Martha Isabel Vallejo Joyas</Col>
                          <Col xs={12} sm={12} md={12} lg={12} className="box">
                            <Row>
                              <Col xs={12} sm={12} md={12} lg={12}>Originator . Metadata Author</Col>
                              <Col xs={12} sm={12} md={12} lg={12}>Principal INvestigator</Col>
                              <Col xs={12} sm={12} md={12} lg={12}>Investigador Principal</Col>
                              <Col xs={12} sm={12} md={12} lg={12}>Calle 28 A No. 15-09</Col>
                              <Col xs={12} sm={12} md={12} lg={12}>Bogotá D.C</Col>
                              <Col xs={12} sm={12} md={12} lg={12}>Colombia</Col>
                              <Col xs={12} sm={12} md={12} lg={12}><Link>martisavallejo@gmail.com</Link></Col>
                              <Col xs={12} sm={12} md={12} lg={12}>320-27</Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </PaperItem>
                {/* DESCRIPCION DE LOS DATOS */}
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Paper className="normal-info">
                    <Row>
                      <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Descripción de los datos</Col>
                      <Col className="accent-title" xs={2} sm={2} md={2} />
                    </Row>
                    <Row>
                      <Col className="description" xs={12} sm={12} md={12} lg={12}>
                        <Row>
                          <Col md={3}>Metadata lenguage</Col>
                          <Col md>Spanish</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Data lenguage</Col>
                          <Col md>Spanish</Col>
                        </Row>
                        <Row>
                          <Col md={3}>External description</Col>
                          <Col md><Link className="link">Segundo censo de plantas leñosas de una Parcela Permanente en 25 hectareas</Link></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Paper>
                </Col>
                {/* REGISTRO EN GBIF */}
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Paper className="normal-info">
                    <Row>
                      <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Registros en GBIF</Col>
                      <Col className="accent-title" xs={2} sm={2} md={2} />
                    </Row>
                    <Row>
                      <Col className="description" xs={12} sm={12} md={12} lg={12}>
                        <Row>
                          <Col md={3} className="fourd-title">Fecha de registro</Col>
                          <Col md>23 July 2014</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Ultima edición</Col>
                          <Col md>23 July 2014</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Fecha de punlicación</Col>
                          <Col md>23 July 2014</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Host</Col>
                          <Col md>Instituto de Investigación de Recursos Biológicos Alexander von Humboldt</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Instalción</Col>
                          <Col md>IPT IAvH</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Installation Contacts</Col>
                          <Col md>Danny Veléz</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Endpoints</Col>
                          <Col md><Link>http://ipt.biodiversidad.co</Link>(DWC ARCHIVE)</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Identifiers</Col>
                          <Col md>
                            <Row>
                              <Col md={12}><Doi doi="doi:10.15472/ch49b6" /></Col>
                              <Col md={12}><Link>http://ipt.biodiversidad.co</Link></Col>
                              <Col md={12}><Link>http://ipt.biodiversidad.co</Link></Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={3}>Last succesful crawl</Col>
                          <Col md>23 July 2014</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Crawling reasons</Col>
                          <Col md>11% Normal | 89% Not modified</Col>
                        </Row>
                        <Row>
                          <Col md={3}>Crawls in total</Col>
                          <Col md>44</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Paper>
                </Col>
                <PaperItem title="Citacion" id="algo">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel, adipisci pariatur. Nesciunt perspiciatis deserunt inventore veniam doloribus ullam, corporis porro minima error qui numquam consequuntur delectus autem cum possimus.
                </PaperItem>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}