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
              marginRight: 'auto'
            }}>
              EXPLORA LOS DATOS
            </FlatButton>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default HomeHeader
