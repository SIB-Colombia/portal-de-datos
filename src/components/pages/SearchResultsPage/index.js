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
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import Divider from 'material-ui/Divider'
import Popover from 'material-ui/Popover/Popover'
import { Menu, MenuItem } from 'material-ui/Menu'
import theme from '../../themes/default'

const Wrapper = styled.div`
  margin-top: 70px;
  .title {
    padding-top: 65px;
    font-weight: 600;
    font-size: ${theme.fonts.titleTwo.font};
    padding-left: 30px;
    color: ${theme.palette.text[0]};
    span {
      font-size: ${theme.fonts.subTitleTwo.font};
      font-weight: ${theme.fonts.subTitleTwo.weight};
    }
  }

  .accent-title {
      margin-top: 15px;
      border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .tabs {
      margin-top: 35px;
      div > button > div > div {
          color: ${theme.palette.text[0]};
          font-size: ${theme.fonts.subTitleTwo.font};
          font-weight: ${theme.fonts.subTitleOne.weight};
      }
  }

  .download {
    text-align: right;
  }

  .icon {
    fill: ${theme.palette.basescale[6]} !important;
    width: 30px !important;
    height: 30px !important;
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
      openP: false,
    }
    this.openMenu = this.openMenu.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
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

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()
    this.setState({
      openP: true,
      anchorEl: event.currentTarget,
    })
  };

  handleRequestClose = () => {
    this.setState({
      openP: false,
    })
  };

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
        <Wrapper style={this.state.open ? { marginLeft: 300 } : { marginLeft: 'auto' }} >
          <Grid fluid={this.state.open}>
            <Row between="xs">
              <Col className="title" xs={12} sm={12} md={12} lg={12}>BÚSQUEDA POR REGISTROS BIOLÓGICOS <ChevronRight className="icon" viewBox="0 0 25 15" /> 45.954.321 <span>RESULTADOS</span></Col>
              <Col className="accent-title" xs={3} sm={2} md={1} lg={1} />
            </Row>
          </Grid>
          <Grid fluid={this.state.open}>
            <Row bottom="xs" between="xs">
              <Col xs={8} sm={8} md={9} lg={8}>
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
              <Col xs sm md lg className="download" style={{ paddingBottom: 5 }}>
                <FlatButton
                  label="DESCARGA"
                  primary
                  icon={<FileDownload />}
                  style={{ color: theme.palette.text[0] }}
                  labelStyle={{ fontSize: theme.fonts.subTitleTwo.font, fontWeight: theme.fonts.subTitleOne.weight }}
                  onClick={this.handleTouchTap}
                />
                <Popover
                  open={this.state.openP}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  onRequestClose={this.handleRequestClose}
                >
                  <Menu>
                    <MenuItem primaryText="Excel" />
                    <MenuItem primaryText="PDF" />
                    <MenuItem primaryText="DwC" />
                  </Menu>
                </Popover>
              </Col>
            </Row>
            <Divider />
          </Grid>
          {this.state.tab === 0 &&
            <Grid fluid={this.state.open}>
              <ResultTable id={this.props.location.search} />
            </Grid>
          }
          {this.state.tab === 1 && <HumboldtMap />}
          {this.state.tab === 2 &&
            <Grid fluid={this.state.open}>
              <SpeciesTable />
            </Grid>
          }
          {this.state.tab === 3 &&
            <Grid fluid={this.state.open}>
              <DatasetsTable />
            </Grid>
          }
          {this.state.tab === 4 &&
            <Grid fluid={this.state.open}>
              <PublisherTable />
            </Grid>
          }
        </Wrapper>
      </PageTemplate>
    )
  }
}

export default SearchResultsPage
