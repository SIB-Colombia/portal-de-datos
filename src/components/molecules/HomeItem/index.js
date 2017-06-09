import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import {Link, TitleSection} from 'components';
import Divider from 'material-ui/Divider';

const Wrapper = styled.div `

  .paper{
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    img{
      padding: 10px;
      width: 100%;
      max-width: 200px;
    }
    &:hover{
      cursor: pointer !important;
      opacity: 0.8 !important;
    }
  }


`
class HomeItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Paper className="paper">
          <TitleSection align='center' size='xxs' className="padding-bottom-1" lighter={600}>{this.props.title}</TitleSection>
          <Divider/>
          <img src='/file.jpg'/>
        </Paper>
      </Wrapper>
    )
  }
}

export default HomeItem;
