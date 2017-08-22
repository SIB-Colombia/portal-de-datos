import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'components'
import _ from 'lodash'
import { size } from 'styled-theme'
import theme from '../../themes/default'

const Wrapper = styled.div`
position: relative;
  .paper {
      color: ${theme.palette.text[0]};
      font-size: ${theme.fonts.subTitleOne.font};
      padding: 10px;
      margin: 30px 0px;

      a {
        color: ${theme.palette.text[0]};
        fontWeight: ${theme.fonts.subTitleTwo.weight};
        font-size: ${theme.fonts.subTitleTwo.font};
        .number {
            font-weight: 400;
            font-size: 28px;
        }
      }
      @media ${size('xs')}{
        margin: 30px !important;
      }
      @media ${size('sm')}{
        margin: 30px;
        div:not(:first-child){
          border-left: 1px solid rgb(224, 224, 224);
        }
      }
      @media ${size('md')}{
        div:not(:first-child){
          border-left: 1px solid rgb(224, 224, 224);
        }
      }
      @media ${size('lg')}{
        div:not(:first-child){
          border-left: 1px solid rgb(224, 224, 224);
        }
      }
  }
`
const GLobalInfo = ({ style, inf }) => (
  <Wrapper>
    <Row className="paper" center="xs" style={style}>
      {_.map(inf, (value, key) => (
        <Col xs sm md lg key={key}><Link to="#"><span className="number">{value.count}</span> {value.name}</Link></Col>
      ))}
    </Row>
  </Wrapper>
)

GLobalInfo.propTypes = {
  inf: PropTypes.any.isRequired,
  style: PropTypes.any,
}

export default GLobalInfo
