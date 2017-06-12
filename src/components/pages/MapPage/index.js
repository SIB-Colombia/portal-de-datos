import React from 'react';
import {PageTemplate, Header, Footer, MapPreview, OptionsTabs} from 'components';
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
    DataPortalService.getOccurrenceGrid(this.props.location.search).then(data =>{
      this.setState({data:data})
    })
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <OptionsTabs datos={this.props}/>
        {this.state.data && <MapPreview data={this.state.data}/> || <CircularProgress className="loading"/>}
      </PageTemplate>
    )
  }
}

export default MapPage;
