import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer, DatasetsSection, DatasetsDetails } from 'components'
import { Tabs, Tab } from 'material-ui/Tabs'
import Divider from 'material-ui/Divider'

const Wrapper = styled.div`
  color: #4B5353;

  .tabs {
    margin-top: 30px;
    div > button > div > div {
      color: #4B5353;
      font-size: 18px;
    }
  }
`

export default class DatasetsRecordPage extends Component {

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          <DatasetsSection />
          <Grid>
            <Tabs
              className="tabs"
              tabItemContainerStyle={{ background: 'transparent' }}
              inkBarStyle={{ background: '#ff7847' }}
              initialSelectedIndex={0}
            >
              <Tab label="RECURSOS">
                <Divider />
                <DatasetsDetails />
              </Tab>
              <Tab label="PROYECTO" />
              <Tab label="ESTADISTICAS*" />
              <Tab label="ACTIVIDAD*" />
            </Tabs>
          </Grid>
        </PageTemplate>
      </Wrapper>
    )
  }
}
