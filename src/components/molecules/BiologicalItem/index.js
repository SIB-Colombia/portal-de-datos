import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { Link } from 'components'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .circle {
    height: 145px;
    width: 145px;
    text-align: center;
    &:hover{
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 10px, rgba(0, 0, 0, 0.23) 0px 2px 10px !important;
    }
  }

  .circle-description {
    text-align: center;
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    margin: 20px 0px;
  }

  img { width: 100%; }
`

class BiologicalItem extends Component {

  static propTypes = {
    group: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  destino = (t) => {
    return `/search/table?${t}`
  }

  render() {
    return (
      <Col xs={12} sm={4} md={4} lg>
        <Row center="xs">
          <Wrapper>
            <Link to={this.destino(this.props.group.q)}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Paper className="circle" circle>
                  <img src={this.props.group.img} alt={this.props.group.title} />
                </Paper>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="circle-description">
                {this.props.group.title}
              </Col>
            </Link>
          </Wrapper>
        </Row>
      </Col>
    )
  }
}

export default BiologicalItem
