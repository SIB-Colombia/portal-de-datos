import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  PageTemplate,
  Header,
  Footer,
  DepartmentList,
} from 'components'
import * as DataPortalService from '../../../services/DataPortalService'

export default class DepartmentsPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      fileComplete: null,
      files: [],
    }
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id })

    DataPortalService.getRegistryDepartment(this.props.match.params.id).then(departments => {
      this.setState({ departments })
    })
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        {this.state.departments && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <DepartmentList departments={this.state.departments} />
            </Col>
          </Row>
        </Grid>}
      </PageTemplate>
    )
  }
}

