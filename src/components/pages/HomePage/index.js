import React from 'react'
import {
  PageTemplate,
  Header,
  Footer,
  HomeHeader,
  GlobalInfo,
  BiologicalGroups,
  DirectAccess,
  GeographicExplorer,
} from 'components'
import _ from 'lodash'
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import * as DataPortalService from '../../../services/DataPortalService'
import * as HomePageService from '../../../services/HomePageService'

const format = require('format-number-with-string')

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: null,
      countGeo: null,
      species: null,
    }
  }

  componentWillMount() {
    DataPortalService.getOccurrenceCount().then(data => {
      this.setState({ count: { name: 'REGISTROS', count: format(data.count, '#.###.') } })
    }).catch(err => new Error(err))

    DataPortalService.getOccurrenceCount('geo').then(data => {
      this.setState({ countGeo: { name: 'GEORREFERENCIADOS', count: format(data.count, '#.###.') } })
    }).catch(err => new Error(err))

    HomePageService.getStatisticsData().then(data => {
      this.setState({ species: data })
    }).catch(err => new Error(err))
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <HomeHeader />
        <Grid>
          <Grid fluid>
            <Paper style={{ position: 'relative' }}>
              {this.state.count && this.state.countGeo && this.state.species && <GlobalInfo style={{ margin: '-30px auto' }} inf={_.concat(this.state.count, this.state.countGeo, { name: 'ESPECIES', count: format((this.state.species.species).toString(), '#.###.') })} />}
            </Paper>
          </Grid>
        </Grid>
        <BiologicalGroups />
        <DirectAccess />
        <GeographicExplorer />
        <Grid
          fluid
          style={{
            backgroundColor: '#0098A3',
            color: '#fff',
            padding: '100px 0px',
          }}
        >
          <Row center="xs" middle="xs">
            <Col xs={12} sm={12} md={12} lg={6} style={{ fontSize: 40, fontWeight: 600 }}>¿Quieres compartir tus datos?</Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <FlatButton
                href="/static/enterate-como"
                backgroundColor="transparent"
                style={{
                  borderStyle: 'solid',
                  borderWidth: 2,
                  color: '#fff',
                  padding: 55,
                  paddingTop: 17,
                  fontSize: 36,
                }}
              >
                ENTÉRATE CÓMO
            </FlatButton>
            </Col>
          </Row>
        </Grid>
      </PageTemplate>
    )
  }
}

export default HomePage
