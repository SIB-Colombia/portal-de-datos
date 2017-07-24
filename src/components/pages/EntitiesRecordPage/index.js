import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer, HumboldtMap, ProviderSection, ContactsSection } from 'components'
import * as EntitiesRecordService from '../../../services/EntitiesRecordService'

const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 200; 
  text-align: center;
  color: #4B5353;

  .accent-title {
      margin-top: 10px;
      border-top: 2px solid #ff7847;
  }

  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .georeferencia{
    text-align: left;
    padding: 30px 0px;
  }
`

export default class EntitiesRecordPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entities: null,
    }
  }

  componentWillMount() {
    EntitiesRecordService.getEntitiesRecord().then(data => {
      this.setState({
        entities: data,
      })
    })
  }

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          {this.state.entities && <ProviderSection provider={this.state.entities} />}
          {this.state.entities && <ContactsSection contacts={this.state.entities.contacts} />}
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
