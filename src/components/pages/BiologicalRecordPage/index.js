import React from 'react'

import {
  PageTemplate,
  Header,
  Footer,
  BasicInformation,
  MoreDetails,
} from 'components'

import * as RegistroService from '../../../services/RegistroBiologicoService'

class BiologicalRecordPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      records: [],
    }
  }

  componentWillMount() {
    this.setState({
      records: RegistroService.getBiologicalRecord(),
    })
  }

  render() {
    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        <BasicInformation record={this.state.records} />
        <MoreDetails detail={this.state.records} />
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
