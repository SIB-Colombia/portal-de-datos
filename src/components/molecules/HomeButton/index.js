import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
import Copyright from 'material-ui/svg-icons/action/copyright'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .carousel-middle{
    color: ${theme.palette.grayscale[0]};
    font-size: ${theme.fonts.titleTwo.font};
    font-weight: 500;
    border: 2px solid ${theme.palette.grayscale[0]};
    padding: 15px 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.2);
    transition: .5s ease;
    &:hover{
      cursor: pointer;
      background: rgba(255,255,255,0.2);
    }
  }
  .carousel-footer{
    font-style: italic !important;
    position: absolute;
    bottom: 35px;
    right: 0px;
    padding: 10px 20px;
    background: rgba(0,0,0,0.5);
    color: ${theme.palette.grayscale[0]};
    font-size: 11px;
    @media ${size('xs')}{
      bottom: 0px;
    }
    @media ${size('sm')}{
      bottom: 55px;
    }
    svg{
      margin-left: 5px !important;
      vertical-align: middle !important;
      color: ${theme.palette.grayscale[0]} !important;
      height: 18px !important;
      width: 18px !important;
    }
  }
`

const redirect = () => {
  window.location.href = '/search/table'
}

const HomeButton = ({ footer }, props) => (
  <Wrapper {...props} onClick={redirect}>
    <div className="carousel-middle animated fadeIn">EXPLORA LOS DATOS</div>
    <div className="carousel-footer">
      {footer}<Copyright />
    </div>
  </Wrapper>
)

HomeButton.propTypes = {
  footer: PropTypes.any.isRequired,
}

export default HomeButton
