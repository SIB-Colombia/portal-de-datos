import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link, HumboldtMap, PaperItem, Doi, PrincipalDataset, TaxonomicCoverageSection, MethodologySection, ContactItem, GlobalInfo } from 'components'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import _ from 'lodash'
import Scrollchor from 'react-scrollchor'

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

  static propTypes = {
    eml: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      eml: null,
    }
  }

  componentWillMount() {
    this.setState({
      eml: this.props.eml,
    })
  }

  render() {
    this.contact = {
      name: 'Martha Isabel Vallejo Joyas',
      inf: [
        'Orginator Metadata Author',
        'Principal Investigador',
        'Investigador principal',
        'Calle 28 A No. 15-09',
        'Bogotá, D.C',
        'Bogotá, D.C',
        'Colombia',
        'martisavallejo@gmail.com',
        '320-2767',
      ],
    }

    return (
      <Wrapper>
        {this.state.eml && <PrincipalDataset eml={this.state.eml} />}
        <GlobalInfo inf={[{ name: 'REGISTROS', count: 546321 }, { name: 'CON COORDENADAS', count: 346321 }, { name: 'TAXONES', count: 46321 }]} />
        <Paper>
          <HumboldtMap />
        </Paper>
        <Grid >
          <Row className="information">
            <Col xs={12} sm={12} md={3} lg={3}>
              <Paper className="indice" style={{ position: 'sticky', top: 80 }}>
                <List>
                  {_.map([
                    { to: 'descripcion', name: 'Descripción' },
                    { to: 'temporal', name: 'Temporal' },
                    { to: 'geografia', name: 'Geográfica' },
                    { to: 'taxonomia', name: 'Taxonómia' },
                    { to: 'metodo_muestro', name: 'Método de muestreo' },
                    { to: 'inf_adicional', name: 'Información adicional' },
                    { to: 'bibliografia', name: 'Bibliografía' },
                    { to: 'partes_asociadas', name: 'Partes asociadas' },
                    { to: 'descripcion_datos', name: 'Descripción de los datos' },
                    { to: 'registro', name: 'Registro en GBIF' },
                    { to: 'citacion', name: 'Citación' },
                  ], (value, key) => (<Scrollchor key={key} to={value.to} animate={{ offset: -80, duration: 600 }}><ListItem>{value.name}</ListItem></Scrollchor>))}
                </List>
              </Paper>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9}>
              <Row>
                {this.state.eml.dataset.abstract.para && <PaperItem title="Descripción" id="descripcion">{this.state.eml.dataset.abstract.para}</PaperItem>}
                {this.state.eml.dataset.purpose.para && <PaperItem title="Propósito" id="proposito">{this.state.eml.dataset.purpose.para}</PaperItem>}
                {this.state.eml.dataset.coverage.temporalCoverage && <PaperItem title="Cobertura temporal" id="temporal">{this.state.eml.dataset.coverage.temporalCoverage}</PaperItem>}
                {this.state.eml.dataset.coverage.geographicCoverage && <PaperItem title="Cobertura geográfica" id="geografia"><HumboldtMap /></PaperItem>}
                {this.state.eml.dataset.coverage.taxonomicCoverage && <PaperItem title="Cobertura taxonómica" id="taxonomia"><TaxonomicCoverageSection /></PaperItem>}
                {this.state.eml.dataset.methods && <PaperItem title="Metodología" id="metodo_muestro"><MethodologySection method={this.state.eml.dataset.methods} /></PaperItem>}
                {this.state.eml.additionalMetadata.metadata.gbif.bibliography && <PaperItem title="Bibliografía" id="bibliografia">{this.state.eml.additionalMetadata.metadata.gbif.bibliography}</PaperItem>}
                {this.state.eml.associatedParty && <PaperItem title="Partes asociadas" id="partes_asociadas">
                  <Row className="contacts">
                    {_.map([0, 1], (key) => (
                      <ContactItem key={key} contact={this.contact} />
                    ))}
                  </Row>
                </PaperItem>}
                {this.state.eml && <PaperItem title="Descripción de los datos" id="descripcion_datos">
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
                </PaperItem>}
                {this.state.eml && <PaperItem title="Registros en GBIF" id="registro">
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
                            <Col md={6}><Doi doi="doi:10.15472/ch49b6" /></Col>
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
                </PaperItem>}
                {this.state.eml.additionalMetadata.metadata.gbif.citation_identifier && <PaperItem title="Citación" id="citacion">{this.state.eml.additionalMetadata.metadata.gbif.citation_identifier}</PaperItem>}
              </Row>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
