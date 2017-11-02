import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer, DatasetsSection, DatasetsDetails } from 'components'
import { Tabs, Tab } from 'material-ui/Tabs'
import Divider from 'material-ui/Divider'
import * as DatasetsService from '../../../services/DatasetsService'

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

  constructor(props) {
    super(props)
    this.state = {
      eml: null,
    }
  }

  componentWillMount() {
    DatasetsService.getDataset(this.props.match.params.id).then(data => {
      this.setState({
        eml: data,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          {this.state.eml && <DatasetsSection eml={this.state.eml} />}
          <Grid>
            <Tabs
              className="tabs"
              tabItemContainerStyle={{ background: 'transparent' }}
              inkBarStyle={{ background: '#ff7847' }}
              initialSelectedIndex={0}
            >
              <Tab label="RECURSOS">
                <Divider />
                {this.state.eml && <DatasetsDetails eml={this.state.eml} />}
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
