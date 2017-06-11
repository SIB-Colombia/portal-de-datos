import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {injectGlobal} from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileDetail,
  FileCarousel,
  FileComment,
  FileHeader,
  FileTab,
  FileMostRecent,
  DepartmentList
} from 'components';

import * as DataPortalService from '../../../services/DataPortalService';

class DepartmentsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fileComplete: null,
      files: []
    }
  }

  componentDidMount() {}

  componentWillMount() {

    this.setState({id: this.props.match.params.id})

    DataPortalService.getRegistryDepartment(this.props.match.params.id).then(departments => {
    	console.log("getRegistryDepartment completo");
      this.setState({departments: departments});
    });

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='File'>
        {this.state.departments && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <DepartmentList departments={this.state.departments}/>
            </Col>
          </Row>
        </Grid>}
      </PageTemplate>
    )
  }
}

export default DepartmentsPage;
