import React, { Component } from 'react';
import styled from 'styled-components';

import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

const Wrapper = styled.div`
    .circle {
        height: 170px;
        width: 170px;
        text-align: center;
        display: inline-block;
    }

    .circle-description {
        text-align: center;
        color: #545859;
        font-size: 18px;
        font-weight: 200;
        margin-top: 20px;
    }
`

class BiologicalItem extends Component {

    constructor(props) {
        super(props);
    }

    redirect() {
        
    }
    render() {
        return (
            <Wrapper onMouseEnter={this.redirect}>
                <Col md>
                    <Paper className="circle" circle={true} />
                </Col>
                <Col md className="circle-description">
                    { this.props.group.title }
                </Col>
            </Wrapper>
        )
    }
}

export default BiologicalItem