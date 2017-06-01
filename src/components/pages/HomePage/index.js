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

import * as FileService from '../../../services/FileService';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      value: 1,
      user: null
    }

  }
  componentDidMount() {}

  componentWillMount() {

    // console.log(this.props.location.pathname);
    FileService.getLastUpdatedRecords().then(data => {
      this.setState({files: data});
    }).catch(err => {
      console.log(err);
    })
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />}>

        {this.state.files.length > 0 && <HomeHeader/>}
        <Alert message="2.287.000 registros Biológicos encontrados, de los cuales 2.044.000 están georeferenciados."/>
        {this.state.files.length > 0 && <FileCarousel data={this.state.files} title="Registros recientes"/>}
        <br/>
        <br/>
      </PageTemplate>
    )
  }
}

export default HomePage;
