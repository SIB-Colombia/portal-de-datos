import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer, Link, HumboldtMap } from 'components'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import InsertLink from 'material-ui/svg-icons/editor/insert-link'

const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 200; 
  text-align: center;
  color: #4B5353;
  .number {
      font-weight: 400;
      font-size: 28px;   
  }

  .paper {
      text-align: center;
      display: inline-block;
      padding: 15px 40px; 
      color: #3E5151;
      font-size: 24px;
  }

  span:not(:first-child){
      border-left: 2px solid rgb(224, 224, 224);
      margin-left: 15px;
      padding-left: 15px;
  }
  .title {
      font-weight: 400;
      font-size: 18px;
      color: #4B5353;
      margin-top: 85px;
  }
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

  .sub-title{
    font-size: 36px;
    margin: 20px;
    font-weight: 400;
  }

  .separated{
    margin-bottom: 30px;
  }

  .more-datails{
    text-align: left;
    .description {
      padding: 20px;
      line-height: 35px;
    }
    .hiper-link{
      margin-top: -10px;
      color: #10AFBD;
      font-weight: 400
    }
    .direct-links {
      line-height: 40px;
      font-weight: 600;
      padding: 10px;
      margin-bottom: 50px;
      a{
        margin-left: 15px;
      }
    }
  }

  .contacts {
    background-color: #ffffff; 
    text-align: left;
    padding: 70px;
    .contact-title{
      font-weight: 600;
      margin: 10px;
    }
    .contact{
      padding: 20px;
    }
    .box{
      border-left: 1px solid rgb(224, 224, 224);
      margin-left: 15px;
      padding-left: 20px;
      line-height: 35px;
    }
  }

  .georeferencia{
    text-align: left;
    padding: 30px 0px;
  }
`

export default class EntitiesRecordPage extends Component {
  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          <Grid>
            <Row center="md">
              <Col className="title" md={12}>PUBLICADOR</Col>
              <Col className="accent-title" md={1} />
            </Row>
            <Row>
              <Col md className="sub-title">Red Nacional de Observadores de Aves (RNOA)</Col>
            </Row>
          </Grid>
          <Paper className="separated">
            <div className="paper">
              <span className="number">546.321</span> REGISTROS
              <span className="number">1800</span> RECURSOS
              <span className="number">5.350</span> ESPECIES
              <span className="number">1800</span> GEORREFERENCIADOS
            </div>
          </Paper>
          <Grid className="more-datails">
            <Row>
              <Col md={3}>
                <Row>
                  <Col md={12}>
                    <img src="/logo_entidad.png" alt="" width="90%" />
                  </Col>
                  <Col md>
                    <Row middle="md">
                      <Col md={2}>
                        <IconButton iconStyle={{ color: '#666D6D' }}>
                          <InsertLink />
                        </IconButton>
                      </Col>
                      <Col md>
                        <Link to="#" className="hiper-link"> Sitio web del publicador </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md>
                <Row>
                  <Col className="title-two" md={12}>Descripción</Col>
                  <Col className="accent-title" md={1} />
                </Row>
                <Row>
                  <Col className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vitae minima, debitis perferendis veritatis repellat similique quos iusto soluta facere, consequatur rem eius nemo aperiam rerum ab temporibus laboriosam ipsum.
                  </Col>
                </Row>
                <Row className="direct-links">
                  <Col md={12}>Endorsed by <Link>SiB Colombia</Link></Col>
                  <Col md={12}>Installation <Link>CCO 1.0</Link></Col>
                  <Col md={12}>Administritive contact: <Link>Gualberto Buitrago</Link></Col>
                  <Col md={12}>Technical contact: <Link>Gualberto Buitrago</Link></Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <Grid className="contacts">
            <Row>
              <Col className="title-two" md={12}>Contactos</Col>
              <Col className="accent-title" md={1} />
            </Row>
            <Row around="md" className="contact">
              <Col md>
                <Row>
                  <Col md={12} className="contact-title">
                    Martha Isabel Vallejo Joyas
                  </Col>
                  <Col md className="box">
                    <Row>
                      <Col md={12}>Orginator Metadata Author</Col>
                      <Col md={12}>Principal Investigador</Col>
                      <Col md={12}>Investigador principal</Col>
                      <Col md={12}>Calle 28 A No. 15-09</Col>
                      <Col md={12}>Bogotá, D.C</Col>
                      <Col md={12}>Bogotá, D.C</Col>
                      <Col md={12}>Colombia</Col>
                      <Col md={12}><Link>martisavallejo@gmail.com</Link></Col>
                      <Col md={12}>320-2767</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md>
                <Row>
                  <Col md={12} className="contact-title">
                    Cristián Samper
                  </Col>
                  <Col md className="box">
                    <Row>
                      <Col md={12}>Author</Col>
                      <Col md={12}>Director</Col>
                      <Col md={12}>Bogotá, D.C</Col>
                      <Col md={12}>Bogotá, D.C</Col>
                      <Col md={12}>ColombiaC</Col>
                      <Col md={12}><Link>csamper@wcs.org</Link></Col>
                      <Col md={12}>320-2767</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <Grid className="georeferencia">
            <Row>
              <Col className="title-two" md={12}>Registros georeferenciados</Col>
              <Col className="accent-title" md={1} />
            </Row>
          </Grid>
          <HumboldtMap />
        </PageTemplate>
      </Wrapper>
    )
  }
}
