import React from 'react'
import PropTypes from 'prop-types'
import {
  PageTemplate,
  Header,
  Footer,
  BasicInformation,
  MoreDetails,
} from 'components'
import _ from 'lodash'
import * as GBIFService from '../../../services/GBIFService'
import * as BiologicalRecordService from '../../../services/BiologicalRecordService'

class BiologicalRecordPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      occurrenceBasic: null,
      moreDetails: null,
    }
  }

  componentWillMount() {
    GBIFService.getOccurrenceById(this.props.match.params.id).then(data => {
      this.setState({ occurrenceBasic: data })
    }).catch(err => {
      console.log(err)
    })

    BiologicalRecordService.getBiologicalRecord().then(data => {
      this.setState({
        moreDetails: data,
      })
    }).catch(err => console.log(err))
  }

  render() {
    const basicInformation = this.state.occurrenceBasic && _.map(this.state.occurrenceBasic.results, (o) => {
      return {
        scientificName: o.scientificName,
        kingdom: o.kingdom,
        phylum: o.phylum,
        order: o.order,
        family: o.family,
        genus: o.genus,
        specificEpithet: o.specificEpithet,
        country: o.country,
        stateProvince: o.stateProvince,
        basisOfRecord: o.basisOfRecord,
        habitat: o.habitat,
        resourceName: o.resourceName,
        providerName: o.providerName,
        decimalLongitude: o.decimalLongitude,
        decimalLatitude: o.decimalLatitude,
      }
    })

    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        {basicInformation && <BasicInformation record={basicInformation} />}
        {this.state.moreDetails && <MoreDetails more={this.state.moreDetails} />}
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
