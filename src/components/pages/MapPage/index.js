import React from 'react';
import {PageTemplate, Header, Footer, Map} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MapGL from 'react-map-gl/src/index';

import * as FileService from '../../../services/FileService';

class MapPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <Map/>
      </PageTemplate>
    )
  }
}

export default MapPage;
