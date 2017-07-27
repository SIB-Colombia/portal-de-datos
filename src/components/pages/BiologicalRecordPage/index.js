import React from 'react'
import PropTypes from 'prop-types'
import {
  PageTemplate,
  Header,
  Footer,
  BasicInformation,
  MoreDetails,
} from 'components'

import * as BiologicalRecordService from '../../../services/BiologicalRecordService'

class BiologicalRecordPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      records: null,
    }
  }

  componentWillMount() {
    BiologicalRecordService.getBiologicalRecord(this.props.match.params.id).then(data => {
      this.setState({ records: data })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        { this.state.records && <BasicInformation record={this.state.records} />}
        { this.state.records && <MoreDetails detail={this.state.records} /> }
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
