import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';

class TaxonItem extends React.Component {

  constructor(props) {
    super(props);
  }
  
  destino(t){
  	return '/search?'+   //ToDo: define query params to search
  			'q='+t/*+'&'+
  			'kingdomName='+t+'&'+
  			'phylumName='+t+'&'+
  			'className='+t+'&'+
  			'orderName='+t+'&'+
  			'familyName='+t+'&'+
  			'genusName='+t+'&'+
  			'speciesName='+t
  			*/;
    
  }
  
  img(t){
    return 'categories/IconosTaxones_'+t+'.svg';
  }

  render() {
    console.log(this.props.taxon);
    return (
      <Link to={this.destino(this.props.taxon.name)}>
          <Col xs={6} sm={4} md={4} lg={3}>
          	<img alt={this.props.taxon} src={this.img(this.props.taxon.alias)}/>
          </Col>
      </Link>
    )
  }
}

export default TaxonItem;
