import React from 'react'
import styled from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
  FileSearchMenu,
  ResultTable,
  PublisherTable,
  HumboldtMap,
  RecursosTable,
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tabs, Tab } from 'material-ui/Tabs'

const Wrapper = styled.div `
    margin-top: 85px;
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

    .tabs {
        margin-top: 30px;
        div{
            color: #4B5353;
            font-size: 18px;
        }
    }
`

const SearchResultsPage = () => {
  return (
    <PageTemplate
      header={<Header filter={<FileSearchMenu />} />} footer={<Footer />}
    >
      <Wrapper>
        <Grid>
          <Row>
            <Col className="title" md={12}>Registros biólogicos</Col>
            <Col className="accent-title" md={1} />
          </Row>
        </Grid>
        <Grid>
          <Tabs
            className="tabs"
            tabItemContainerStyle={{ background: 'transparent' }} inkBarStyle={{ background: '#ff7847' }}
          >
            <Tab label="TABLA">
              <ResultTable />
            </Tab>
            <Tab label="MAPA">
              <HumboldtMap />
            </Tab>
            <Tab label="ESPECIES" />
            <Tab label="RECURSOS">
              <RecursosTable />
            </Tab>
            <Tab label="PUBLICADORES">
              <PublisherTable />
            </Tab>
          </Tabs>
        </Grid>
      </Wrapper>
    </PageTemplate>
  )
}

export default SearchResultsPage
