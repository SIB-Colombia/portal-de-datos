import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  PageTemplate,
  Header,
  Footer,
  FileSearchMenu,
  ResultTable,
  PublisherTable,
  HumboldtMap,
  DatasetsTable,
  SpeciesTable,
  Loading
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as SpeciesService from '../../../services/SpeciesService'
import * as EntitiesRecordService from '../../../services/EntitiesRecordService'

const Wrapper = styled.div`
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
        div > button > div > div {
            color: #4B5353;
            font-size: 18px;
        }
    }
`

class SearchResultsPage extends React.Component {

  static propTypes = {
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
  }

  constructor(props, history) {
    super(props, history)
    this.state = {
      tab: 0,
      result: [],
      species: [],
      publishers: []
    }
  }

  componentWillMount() {


    SpeciesService.getSpecies(this.props.location.search).then(data => {
      this.setState({ species: data })
    })

    EntitiesRecordService.getEntitiesList().then(data => {
      this.setState({ publishers: data })
    })
    this.handleTab(this.props.match.params.tab)
  }

  handleTab(tab) {
    switch (tab) {
      case 'table':
        window.history.replaceState('data', 'title', `/search/table${this.props.location.search}`)
        this.setState({ tab: 0 })
        break
      case 'map':
        window.history.replaceState('data', 'title', `/search/map${this.props.location.search}`)
        this.setState({ tab: 1 })
        break
      case 'species':
        window.history.replaceState('data', 'title', `/search/species${this.props.location.search}`)
        this.setState({ tab: 2 })
        break
      case 'datasets':
        window.history.replaceState('data', 'title', `/search/datasets${this.props.location.search}`)
        this.setState({ tab: 3 })
        break
      case 'providers':
        window.history.replaceState('data', 'title', `/search/providers${this.props.location.search}`)
        this.setState({ tab: 4 })
        break
      default:
        window.history.replaceState('data', 'title', `/search/table${this.props.location.search}`)
        this.setState({ tab: 0 })
        break
    }
  }

  render() {
    return (
      <PageTemplate header={<Header filter={<FileSearchMenu />} />} footer={<Footer />}>
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
              tabItemContainerStyle={{ background: 'transparent' }}
              inkBarStyle={{ background: '#ff7847' }}
              initialSelectedIndex={this.state.tab}
            >
              <Tab label="TABLA" onActive={() => this.handleTab('table')} />
              <Tab label="MAPA" onActive={() => this.handleTab('map')} />
              <Tab label="ESPECIES" onActive={() => this.handleTab('species')} />
              <Tab label="RECURSOS" onActive={() => this.handleTab('datasets')} />
              <Tab label="PUBLICADORES" onActive={() => this.handleTab('providers')} />
            </Tabs>
          </Grid>
          {this.state.tab === 0 &&
            <Grid fluid>
              {<ResultTable id={this.props.location.search} /> || <Loading />}
            </Grid>
          }
          {this.state.tab === 1 && <HumboldtMap /> }
          {this.state.tab === 2 &&
            <Grid>
              {<SpeciesTable species={this.state.species} /> || <Loading />}
            </Grid>
          }
          {this.state.tab === 3 &&
            <Grid>
              {<DatasetsTable /> || <Loading />}
            </Grid>
          }
          {this.state.tab === 4 &&
            <Grid>
              {<PublisherTable publisher={this.state.publishers} /> || <Loading />}
            </Grid>
          }
        </Wrapper>
      </PageTemplate>
    )
  }
}

export default SearchResultsPage
