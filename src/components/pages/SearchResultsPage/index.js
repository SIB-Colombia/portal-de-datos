import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  PageTemplate,
  Header,
  Footer,
  FileSearchFilter,
  ResultTable,
  PublisherTable,
  HumboldtMap,
  DatasetsTable,
  SpeciesTable,
  TaxonomySearchItem,
  TaxonomicCategorySearchItem,
  LocationSearchItem,
  HabitatSearchItem,
  ElevationSearchItem,
  DepthSearchItem,
  PublisherSearchItem,
  DateEventSearchItem,
  NameCollectorSearchItem,
  ResourceNameSearchItem,
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tabs, Tab } from 'material-ui/Tabs'
import FlatButton from 'material-ui/FlatButton'
import FileDownload from 'material-ui/svg-icons/file/file-download'

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

  .download {
    text-align: right;
  }  
`

class SearchResultsPage extends React.Component {

  static propTypes = {
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      tab: 0,
      open: true,
    }
    this.openMenu = this.openMenu.bind(this)
  }

  componentWillMount() {
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

  openMenu(open) {
    this.setState({
      open,
    })
  }

  render() {
    return (
      <PageTemplate
        header={
          <Header
            filter={
              <FileSearchFilter open={this.openMenu}>
                <TaxonomySearchItem />
                <TaxonomicCategorySearchItem />
                <LocationSearchItem />
                <HabitatSearchItem />
                <ElevationSearchItem />
                <DepthSearchItem />
                <PublisherSearchItem />
                <DateEventSearchItem />
                <NameCollectorSearchItem />
                <ResourceNameSearchItem />
              </FileSearchFilter>
            }
          />
        }
        footer={<Footer />}
      >
        <Wrapper style={this.state.open ? { marginLeft: 340 } : { marginLeft: 'auto' }} >
          <Grid>
            <Row between="xs">
              <Col className="title" md={12}>Registros biólogicos</Col>
              <Col className="accent-title" md={1} />
            </Row>
          </Grid>
          <Grid>
            <Row bottom="xs">
              <Col xs={8} sm={8} md={8} lg={8}>
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
              </Col>
              <Col xs sm md lg className={this.state.open ? '' : 'download'} style={{ paddingBottom: 5 }}>
                <FlatButton
                  label="DESCARGA"
                  labelPosition="before"
                  icon={<FileDownload />}
                  style={{ color: '#4B5353' }}
                />
              </Col>
            </Row>
          </Grid>
          {this.state.tab === 0 &&
            <Grid fluid>
              <ResultTable id={this.props.location.search} />
            </Grid>
          }
          {this.state.tab === 1 && <HumboldtMap />}
          {this.state.tab === 2 &&
            <Grid>
              <SpeciesTable />
            </Grid>
          }
          {this.state.tab === 3 &&
            <Grid>
              <DatasetsTable />
            </Grid>
          }
          {this.state.tab === 4 &&
            <Grid>
              <PublisherTable />
            </Grid>
          }
        </Wrapper>
      </PageTemplate>
    )
  }
}

export default SearchResultsPage
