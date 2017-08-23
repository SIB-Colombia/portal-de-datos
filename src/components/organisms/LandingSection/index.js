import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import theme from '../../themes/default'

const Wrapper = styled.div`
  background: ${theme.palette.secondary[0]};
  padding: 60px;
  color: ${theme.palette.grayscale[0]};
  font-size: ${theme.fonts.titleOne.font};
  font-weight: 600;
  .landing{
    color: ${theme.palette.grayscale[0]};
    font-size: ${theme.fonts.titleTwo.font};
    font-weight: 600;
    border: 2px solid ${theme.palette.grayscale[0]};
    padding: 15px;
    transition: .5s ease;
    &:hover{
      cursor: pointer;
      background: rgba(255,255,255,0.2);
    }
  }
`

export default class LandingSection extends Component {

  redirect = () => {
    window.location.href = '/static/enterate-como'
  }

  render() {
    return (
      <Wrapper>
        <Grid fluid >
          <Row center="xs" middle="xs">
            <Col xs={12} sm={7} md={6} lg={5} >¿Quieres compartir tus datos?</Col>
            <Col xs={12} sm={5} md={5} lg={4} className="landing" onClick={this.redirect}>
              ENTÉRATE CÓMO
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
