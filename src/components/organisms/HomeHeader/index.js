import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { size } from 'styled-theme'
import { HomeCard } from 'components'

const Carousel = require('react-responsive-carousel').Carousel

const Wrapper = styled.div`
  .slide-background{
    background: #fff;
    overflow: auto;
  }
  .carousel .slide{
    background: #fff !important;
  }
  .control-dots{
    margin: 50px 0 !important;
    @media ${size('sm')}{
      margin: 70px 0 !important;
    }
  }
  .carousel .control-dots .dot{
    width: 12px;
    height: 12px;
  }
`
class HomeHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }

    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentWillMount() { this.updateDimensions() }

  componentDidMount() { window.addEventListener('resize', this.updateDimensions) }

  componentWillUnmount() { window.removeEventListener('resize', this.updateDimensions) }

  updateDimensions() { this.setState({ width: window.innerWidth, height: window.innerHeight }) }

  render() {
    const sliders = [
      {
        id: 1,
        type: 'image',
        url: '89714_orig.jpg',
        copyright: 'Ejemplo de pie de página número 1',
      },
      {
        id: 2,
        type: 'image',
        url: '03893_orig.jpg',
        copyright: 'Ejemplo de pie de página número 2',
      },
      {
        id: 3,
        type: 'image',
        url: '82168_orig.jpg',
        copyright: 'Ejemplo de pie de página número 3',
      },
    ]

    return (
      <Wrapper>
        <Carousel showThumbs={false} showStatus={false}>
          {
            _.map(sliders, (value) => (
              <div key={value.id} className="slide-background">
                {value.type === 'image' && <HomeCard slider={value} height={this.state.height} />}
                {value.type === 'video'}
              </div>
            ))
          }
        </Carousel>
      </Wrapper>
    )
  }
}

export default HomeHeader
