import React from 'react'

import {
  PageTemplate,
  Header,
  Footer,
  FileSearchMenu,
  BasicInformation,
} from 'components'

class BiologicalRecordPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      records: [
        { title: 'Enterolobium schomburgkii (Benth.) Benth.' },
      ],
    }
  }

  render() {
    return (
      <PageTemplate
        header={
          <Header
            filter={<FileSearchMenu />}
          />
        }
        footer={<Footer />}
      >
        <BasicInformation record={this.state.records} />
      </PageTemplate>
    )
  }
}

export default BiologicalRecordPage
