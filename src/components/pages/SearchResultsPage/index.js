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
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tabs, Tab } from 'material-ui/Tabs'
import * as DataPortalService from '../../../services/DataPortalService'
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
    DataPortalService.getOccurrenceSearch(this.props.location.search).then(data => {
      this.setState({ result: data.results })
    })

    SpeciesService.getSpecies(this.props.location.search).then(data => {
      this.setState({ species: data })
    })

    EntitiesRecordService.getEntitiesList().then(data => {
      this.setState({ publishers: data })
    })

    switch (this.props.match.params.tab) {
      case 'table':
        this.setState({ tab: 0 })
        break
      case 'map':
        this.setState({ tab: 1 })
        break
      case 'specie':
        this.setState({ tab: 2 })
        break
      case 'dataset':
        this.setState({ tab: 3 })
        break
      case 'provider':
        this.setState({ tab: 4 })
        break
      default:
        this.setState({ tab: 0 })
        break
    }
  }

  handleTab() {
    // TODO: Realizar modificacion por parametros en la url para cambio de tab
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
              <Tab label="TABLA" onActive={this.handleTab()}>
                <ResultTable results={this.state.result} />
              </Tab>
              <Tab label="MAPA">
                <HumboldtMap />
              </Tab>
              <Tab label="ESPECIES">
                <SpeciesTable species={this.state.species} />
              </Tab>
              <Tab label="RECURSOS">
                <DatasetsTable />
              </Tab>
              <Tab label="PUBLICADORES">
                <PublisherTable publisher={this.state.publishers} />
              </Tab>
            </Tabs>
          </Grid>
        </Wrapper>
      </PageTemplate>
    )
  }
}

export default SearchResultsPage
