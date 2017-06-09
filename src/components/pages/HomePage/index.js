import React from 'react';
import {
  PageTemplate,
  Header,
  Footer,
  HomeHeader,
  FileCarousel,
  HomeItem,
  Alert
} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
const format = require('format-number-with-string');

import * as FileService from '../../../services/FileService';
import * as DataPortalService from '../../../services/DataPortalService';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null,
      countGeo: null,
      files: []
    }

  }
  componentDidMount() {}

  componentWillMount() {

    DataPortalService.getOccurrenceCount().then(data => {
      this.setState({count: format(data.count, '#.###.')});
    }).catch(err => {
      console.log(err);
    })

    DataPortalService.getOccurrenceCount('geo').then(data => {
      this.setState({countGeo: format(data.count, '#.###.')});
    }).catch(err => {
      console.log(err);
    })

    FileService.getLastUpdatedRecords().then(data => {
      this.setState({files: data});
    }).catch(err => {
      console.log(err);
    })

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <HomeHeader/>
        {this.state.count && this.state.countGeo && <Alert className="animated swing" message={`${this.state.count} registros Biológicos encontrados, de los cuales ${this.state.countGeo} están georeferenciados.`} />}
        {this.state.files.length > 0 && <FileCarousel data={this.state.files} title="Registros recientes"/>}
        <br/>
        <br/>
      </PageTemplate>
    )
  }
}

export default HomePage;
