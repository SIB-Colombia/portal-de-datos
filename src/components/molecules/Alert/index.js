import React from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Paper from 'material-ui/Paper';
import {Link, TitleSection} from 'components';
import Divider from 'material-ui/Divider';


const Wrapper = styled.div `
text-align: center;
margin: 40px 40px 10px 40px;

span{
  display: inline-block;
  padding: 20px;
  color: ${palette('option', 0)};
  background: ${palette('basescale', 3)};
  text-align: center;
  font-size: 20px;
}

`
class Alert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper {...this.props}>
        <span>
          {this.props.message}
        </span>
      </Wrapper>
    )
  }
}

export default Alert;
