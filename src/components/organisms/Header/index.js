import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, HeaderSearchAdvance, HeaderUserMenu } from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Tune from 'material-ui/svg-icons/image/tune'
import Search from 'material-ui/svg-icons/action/search'
import { size } from 'styled-theme'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
// import {me, isAuthenticated} from '../../../auth';
import { isAuthenticated } from '../../../auth'
import theme from '../../themes/default'
import Const from '../../../const'

const Wrapper = styled.nav`
position:fixed;
top:0;
width:100%;
z-index: 10 !important;
  .box-nav-search-content{
    text-align: center;
    padding: 6px 0px;
    @media ${size('sx')}{
      display: none;
    }
    @media ${size('xs')}{
      display: none;
    }
    .box-search-color{
      background: ${theme.palette.basescale[0]};
      hr{
        display: none;
      }
    }
    .box-nav-advance{
      cursor: pointer;
      &:hover{
        opacity: 0.5;
      }
    }
    .box-nav-search{
      padding:2px;
    }
    .box-nav-icon{
      padding-top: 15px;
    }

  }
  svg{
    color: ${theme.palette.grayscale[5]} !important;
  }
  .box-logo{
    @media ${size('sx')}{
      text-align: center;
    }
    @media ${size('xs')}{
      text-align: center;
    }
  }
  .box-link{
    text-align:right;
    a {
      height:100% !important;
      line-height: 4 !important;
    }
    @media ${size('sx')}{
      display: none;
    }
    @media ${size('xs')}{
      display: none;
    }
  }
`

/* const Title = styled.div`
display:inline-block;
vertical-align: middle;
color: ${palette('grayscale', 5)};
`
const TitleMain = styled.div`
font-size:14px;
text-transform: uppercase;
margin-top: -5px;
line-height: 1;
b{
margin-right: 2px;
}

`
const TitleSub = styled.div`
font-size:14px;
text-transform: uppercase;
line-height:1;
` */

// Get user from Redis [Once time], this module remember promise

// const getMe = me();

class Header extends React.Component {

  static propTypes = {
    filter: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      open: false,
      openD: false,
    }

    this.url = null
    this.changeUrl = this.changeUrl.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  componentWillMount() {
    /* getMe.then(data => {
      //console.log('res me',data);
      if (data) {
        console.log('user logged->', data);
        // this.setState({user: isAuthenticated()});
      } else {
        console.log('user not login :(');
      }
    })*/

  }

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
    window.history.replaceState('data to be passed', 'Title of the page', '/')
  };

  handleSearch = () => {
    window.location.href = `/search/table?${this.url !== null ? this.url : ''}`
  };

  handleTextFieldKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        console.log('Enter')
        window.location.href = `/search/table?q=${event.target.value}`
        break
      case 'Escape':
        // etc...
        break
      default: break
    }
  };

  changeUrl(url) {
    this.url = url
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      openD: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      openD: false,
    })
  }


  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onTouchTap={
          this.handleClose
        }
      />,
      <RaisedButton
        label="Buscar"
        className="btn-secondary-modal"
        onTouchTap={this.handleSearch}
      />,
    ]

    const customContentStyle = {
      width: '90%',
      maxWidth: 'none !important',
    }

    return (
      <Wrapper>
        <Paper>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={3} md={3} lg={3} className="box-logo">
                {this.props.filter}
                <Link to={'/'}>
                  <img src={Const.urlLogo} width="220" height="70" alt="" />
                </Link>
              </Col>
              <Col xs={12} sm={4} md={4} lg={5} className="box-nav-search-content">
                <Row className="box-search-color">
                  <Col xs={1} sm={2} md={2} lg={1} className="box-nav-icon align-right">
                    <Search />
                  </Col>
                  <Col xs={10} sm={8} md={8} lg={10} className="box-nav-search">
                    <TextField hintText="Buscar" fullWidth onKeyDown={this.handleTextFieldKeyDown} />
                  </Col>
                  <Col xs={1} sm={2} md={2} lg={1} className="box-nav-icon align-left">
                    <a onTouchTap={this.handleOpen} className="box-nav-advance">
                      <Tune />
                    </a>
                  </Col>
                </Row>
              </Col>
              {!isAuthenticated() && <Col xs={12} sm={4} md={5} lg={4} className="box-link">
                <FlatButton
                  onClick={this.handleTouchTap}
                  label="Explorar"
                />
                <Popover
                  open={this.state.openD}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                  onRequestClose={this.handleRequestClose}
                  animation={PopoverAnimationVertical}
                >
                  <Menu>
                    <MenuItem primaryText="Registros" href="/search/table" />
                    <MenuItem primaryText="Recursos" href="datasets" />
                    <MenuItem primaryText="Publicadores" href="publishers" />
                    <MenuItem primaryText="Explorador geográfico" href="departments" />
                  </Menu>
                </Popover>

                <Link to="/login/signup" activeClassName="active">
                  <FlatButton label="Registrarse" />
                </Link>
                <Link to="/login/signin" activeClassName="active">
                  <FlatButton label="Ingresar" />
                </Link>
              </Col>}
              {isAuthenticated() && <Col xs={12} sm={4} md={3} lg={3} className="box-link">
                <HeaderUserMenu />
              </Col>}
            </Row>
          </Grid>
          <Dialog titleClassName="modal-header-style" title="Filtros de búsqueda" contentStyle={customContentStyle} actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent>
            <HeaderSearchAdvance url={this.changeUrl} />
          </Dialog>
        </Paper>
      </Wrapper>
    )
  }
}

export default Header
