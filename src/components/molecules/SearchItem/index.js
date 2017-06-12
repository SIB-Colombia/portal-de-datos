import React from 'react';
import styled from 'styled-components';
import {Link, Taxon} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';


const Wrapper = styled.div `
	border: 1px solid gray;
	text-align:justify;
	
`

const Descripcion = styled.div `
	
`
const Titulo = styled.div `
	
`
const Numero = styled.div `
  word-break: break-all;
`
class SearchItem extends React.Component {

  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <Wrapper>
        <Row>
        
          <Col xs={12} sm={3} md={3} lg={3}>
            <Titulo>
            	<Link
            		target="_blank"
            		to={this.props.item.provider.website_url}
            		title={this.props.item.provider.description} >
            			{this.props.item.provider.name}<br/>
            			{this.props.item.provider.city}
            	</Link>
            </Titulo>
            <Numero>
              {this.props.item.catalog.number}
            </Numero>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <img src={this.props.item.resource.logo_url} title={this.props.item.resource.name}/><br/>
            <div title={this.props.item.resource.name} >
              {this.props.item.resource.alternate_identifier}
            </div>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Taxon
              id={this.props.item.occurrenceid}
              name={this.props.item.canonical}
              taxonomy={this.props.item.taxonomy}
              rank={this.props.item.taxon_rank}
            />
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            Tipo: {this.props.item.basis_of_record.name}<br/>
            {this.props.item.habitat} {this.props.item.locality}
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default SearchItem;
