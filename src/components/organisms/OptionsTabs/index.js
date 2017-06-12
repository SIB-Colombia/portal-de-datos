import React from 'react';
import styled from 'styled-components';
import {IconLink, Link, HeaderSearchAdvance, HeaderUserMenu} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Tune from 'material-ui/svg-icons/image/tune';
import Search from 'material-ui/svg-icons/action/search';
import {size, palette} from 'styled-theme';
// import {me, isAuthenticated} from '../../../auth';
import {isAuthenticated} from '../../../auth';

const Wrapper = styled.nav `
	position:fixed;
	top:10;
	z-index: 1000 !important;
`

//Get user from Redis [Once time], this module remember promise

// const getMe = me();

class OptionsTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      open: false
    }
  }

  componentWillMount() {
    /*getMe.then(data => {
      //console.log('res me',data);
      if (data) {
        console.log('user logged->', data);
        // this.setState({user: isAuthenticated()});
      } else {
        console.log('user not login :(');
      }
    })*/

  }
  
  mapa(x){
  	console.log(x);
  	return "/map"+x.datos.location.search;
  }
  tabla(x){
  	return "/search"+x.datos.location.search;
  }
  
  render() {
	console.log(this.props);

                /*{this.props.filter}*/
    return (
      <Wrapper>
        <Grid>
          <Row center="xs">
		    <Col xs={3} >
		      <Paper>
              	 <Link to={this.mapa(this.props)}>
                  <FlatButton label="Mapa"/>
                </Link>
              	 <Link to={this.tabla(this.props)}>
                  <FlatButton label="Tabla"/>
                </Link>
			  </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default OptionsTabs;
