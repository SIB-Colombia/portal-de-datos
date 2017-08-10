import React, { Component } from 'react'
import styled from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
  DatasetsList,
  FileSearchFilter,
  ResourceNameSearchItem,
  PublisherSearchItem,
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import * as DatasetsService from '../../../services/DatasetsService'

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

export default class DatasetsListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datasets: null,
    }
  }

  componentWillMount() {
    DatasetsService.getDatasetsList().then(data => {
      this.setState({
        datasets: data,
      })
    })
  }

  render() {
    return (
      <PageTemplate
        header={
          <Header
            filter={
              <FileSearchFilter>
                <PublisherSearchItem />
                <ResourceNameSearchItem />
              </FileSearchFilter>
            }
          />
        }
        footer={<Footer />}
      >
        <Wrapper>
          <Grid>
            <Row>
              <Col className="title" md={12}>Recursos</Col>
              <Col className="accent-title" md={1} />
            </Row>
            {this.state.datasets && <DatasetsList datasets={this.state.datasets} />}
          </Grid>
        </Wrapper>
      </PageTemplate>
    )
  }
}
