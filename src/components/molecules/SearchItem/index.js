import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';


const Wrapper = styled.div `

`

class SearchItem extends React.Component {

  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <Wrapper>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            {this.props.item.canonical}
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            {this.props.item.locality}
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default SearchItem;
