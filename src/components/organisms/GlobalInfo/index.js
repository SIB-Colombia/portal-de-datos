import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'

const Wrapper = styled.div`
    font-size: 18px;
    font-weight: 200; 
    margin: -35px auto;
    text-align: center;
       
    .number {
        font-weight: 400;
        font-size: 28px;   
    }

    .paper {
        text-align: center;
        display: inline-block;
        padding: 15px 40px; 
    }

    span:not(:first-child){
        border-left: 1px solid rgb(224, 224, 224);
        margin-left: 15px;
        padding-left: 15px;
    }
`

class GLobalInfo extends Component {

  static propTypes = {
    count: PropTypes.any.isRequired,
    countGeo: PropTypes.any.isRequired,
    species: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Paper className="paper">
          <span className="number">{this.props.count}</span> REGISTROS
          <span className="number">{this.props.species.species}</span> ESPECIES
          <span className="number">{this.props.countGeo}</span> GEORREFERENCIADOS
        </Paper>
      </Wrapper>
    )
  }
}

export default GLobalInfo
