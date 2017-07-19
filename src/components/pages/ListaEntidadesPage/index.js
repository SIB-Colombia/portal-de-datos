import React, { Component } from 'react'
import styled from 'styled-components'
import { PageTemplate, Header, Footer, EntidadesList } from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
  margin: 85px 0px;
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

export default class ListaEntidadesPage extends Component {

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Wrapper>
          <Grid>
            <Row>
              <Col className="title" md={12}>Publicadores</Col>
              <Col className="accent-title" md={1} />
            </Row>
            <EntidadesList />
          </Grid>
        </Wrapper>
      </PageTemplate>
    )
  }
}
