import React, { Component } from 'react';
import styled from 'styled-components';

import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import { Link } from 'components';

const Wrapper = styled.div`
    .circle {
        height: 170px;
        width: 170px;
        text-align: center;
        display: inline-block;
       &:hover{
            cursor: pointer;
        }
    }

    .circle-description {
        text-align: center;
        color: #545859;
        font-size: 18px;
        font-weight: 200;
        margin-top: 20px;
    }

    img {
        width: 100%;
    }
`

class BiologicalItem extends Component {

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
    render() {
        return (
            <Wrapper>
              <Link to={this.destino(this.props.group.name)}>
                <Col md>
                    <Paper className="circle" circle={true}>
                        <img src={this.props.group.img} alt={this.props.group.title} />
                    </Paper>
                </Col>
                <Col md className="circle-description">
                    {this.props.group.title}
                </Col>
              </Link>
            </Wrapper>
        )
    }
}

export default BiologicalItem
