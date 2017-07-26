import React from 'react'
import {
  PageTemplate,
  Header,
  Footer,
  HomeHeader,
  GlobalInfo,
  BiologicalGroups,
  DirectAccess,
} from 'components'
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

    /*console.log(window.innerHeight + window.addEventListener('resize', true))*/
    DataPortalService.getOccurrenceCount().then(data => {
      this.setState({ count: format(data.count, '#.###.') })
    }).catch(err => {
      console.log(err)
    })

    DataPortalService.getOccurrenceCount('geo').then(data => {
      this.setState({ countGeo: format(data.count, '#.###.') })
    }).catch(err => {
      console.log(err)
    })

    HomePageService.getStatisticsData().then(data => {
      this.setState({ species: data })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <HomeHeader />
        {this.state.count && this.state.countGeo && this.state.species && <GlobalInfo count={this.state.count} countGeo={this.state.countGeo} species={this.state.species} />}
        <BiologicalGroups />
        <DirectAccess />
      </PageTemplate>
    )
  }
}

export default HomePage
