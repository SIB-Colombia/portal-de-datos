import React from 'react';
import styled from 'styled-components';
import { Link, HomeCard, HomeItem } from 'components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled.div`

  background-image: url('/background/11285_orig.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment:fixed;
`
class HomeHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {

    this.updateDimensions();

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {

    return (
      <Wrapper style={{
        minHeight: `${this.state.height / 3}px`,
        padding: `${this.state.height / 6}px`
      }}>
        <Grid className="container">
          <Row>
            <FlatButton backgroundColor="transparent" style={{
              borderStyle: 'solid',
              borderWidth: 2,
              color: '#fff',
              padding: 55,
              paddingTop: 17,
              fontSize: 25,
              marginLeft: 'auto',
              marginRight: 'auto  '
            }}>
              EXPLORA LOS DATOS
            </FlatButton>
          </Row>
            {/* QUITAR ESTO!!  */}
          <Col xs={6} sm={3} md={3} lg={3} className="animated fadeInLeft">
            <HomeItem title="Taxonomía" />
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} className="animated fadeInDown">
            <HomeItem title="Recursos" />
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} className="animated fadeInUp">
            <HomeItem title="Departamentos" />
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} className="animated fadeInRight">
            <HomeItem title="Entidades" />
          </Col>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeHeader
