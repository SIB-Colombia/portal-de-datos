import React from 'react';
import {PageTemplate, Header, Footer, MapPreview} from 'components';
import CircularProgress from 'material-ui/CircularProgress';
import * as DataPortalService from '../../../services/DataPortalService';

class MapPage extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      data : null
    }
  }

  componentWillMount() {
    DataPortalService.getOccurrenceGrid().then(data =>{
      this.setState({data:data})
    })
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        {this.state.data && <MapPreview data={this.state.data}/> || <CircularProgress className="loading"/>}
      </PageTemplate>
    )
  }
}

export default MapPage;
