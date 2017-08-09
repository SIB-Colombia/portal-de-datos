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

class BiologicalRecordPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      occurrence: null,
    }
  }

  componentWillMount() {
    GBIFService.getOccurrenceById(this.props.match.params.id).then(data => {
      console.log(data)
      this.setState({ occurrence: data })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const basicInformation = this.state.occurrence && _.map(this.state.occurrence.results, (o) => {
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
        {basicInformation && <MoreDetails more={basicInformation} />}
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
