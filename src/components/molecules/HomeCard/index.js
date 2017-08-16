import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { HomeButton } from 'components'

const Wrapper = styled.div`
  .box-home{
    background: white;
    position: relative;
  }
`
const HomeCard = ({ slider, height }) => (
  <Wrapper>
    <div
      className="box-home"
      style={{
        color: 'white',
        height: height / 1.8,
        backgroundImage: `url(/background/${slider.url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <HomeButton footer={slider.copyright} />
    </div>
  </Wrapper>
)

HomeCard.propTypes = {
  slider: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
}

export default HomeCard
