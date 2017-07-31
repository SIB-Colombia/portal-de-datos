import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { Link } from 'components'
import _ from 'lodash'

const Wrapper = styled.div`
  .paper {
      color: #3E5151;
      font-size: 24px;
      padding: 10px;
      margin: 30px 0px;

      a {
        color: #3E5151;
        fontWeight: 200;
        font-size: 18px;
        .number {
            font-weight: 400;
            font-size: 28px;
        }
      }

      div:not(:first-child){
        border-left: 1px solid rgb(224, 224, 224);
      }
  }
`

class GLobalInfo extends Component {

  static propTypes = {
    inf: PropTypes.any.isRequired,
    style: PropTypes.any,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Paper>
          <Row className="paper" center="xs" style={this.props.style}>
            {_.map(this.props.inf, (value, key) => (
              <Col xs={12} sm={6} md={4} lg key={key}><Link><span className="number">{value.count}</span> {value.name}</Link></Col>
            ))}
          </Row>
        </Paper>
      </Wrapper>
    )
  }
}

export default GLobalInfo
