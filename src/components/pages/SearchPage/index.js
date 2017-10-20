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
  OptionsTabs,
  FileMostRecent,
  SearchList
} from 'components';

import * as DataPortalService from '../../../services/DataPortalService';
import * as GBIFService from '../../../services/GBIFService';

class SearchPage extends React.Component {

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
    GBIFService.getOccurrenceSearch(this.props.location.search).then(data => {
      this.setState({result: data.results});
    });

  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='File'>
      	<OptionsTabs datos={this.props}/>
        {this.state.result && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <SearchList lista={this.state.result}/>
            </Col>
          </Row>
        </Grid>}
      </PageTemplate>
    )
  }
}

export default SearchPage;
