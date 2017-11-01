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
    if (this.props.match.params.id!=undefined){
      BiologicalRecordService.getBiologicalRecord(this.props.match.params.id).then(data => {
        console.log("_--------______-------__--")
        console.log(data)
        this.setState({ occurrenceBasic: data,  moreDetails: data })
      }).catch(err => {
        console.log("Ocurrio un error")
        console.log(err)
      })
      
      
      /*
      BiologicalRecordService.getBiologicalRecord(this.props.match.params.id).then(data => {
        this.setState({
          moreDetails: data,
        })
      }).catch(err => console.log(err))
      */
      
    }
  }

  render() {
    var basicInformation = false
    var o = {}
    var d = {}
    if(this.state.occurrenceBasic){
      o = this.state.occurrenceBasic.results.occurrence
      d = this.state.occurrenceBasic.results.dataset
      basicInformation = {
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
        resourceName: d.title,
        providerName: o.providerName,
        decimalLongitude: o.decimalLongitude,
        decimalLatitude: o.decimalLatitude,
        description: d.description
      }
    }
    console.log("basicInformation")
    console.log(basicInformation)
    
    console.log("this.state.moreDetails")
    console.log(this.state.occurrenceBasic)
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        {basicInformation && <BasicInformation record={basicInformation} o={o} d={d} />}
        {this.state.occurrenceBasic && <MoreDetails more={this.state.occurrenceBasic.results} />}
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
