import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { Link } from 'components'

const Wrapper = styled.div`
    .circle {
        height: 170px;
        width: 170px;
        text-align: center;
        display: inline-block;
       &:hover{
            cursor: pointer;
        }
    }

    .circle-description {
        text-align: center;
        color: #545859;
        font-size: 18px;
        font-weight: 200;
        margin: 20px 0px;
    }

    img {
        width: 100%;
    }
`

class BiologicalItem extends Component {

  static propTypes = {
    group: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  destino(t) {
    return '/search/table?' + t  // ToDo: define query params to search
    //  'q=' + t
    /* +'&'+
    'kingdomName='+t+'&'+
    'phylumName='+t+'&'+
    'className='+t+'&'+
    'orderName='+t+'&'+
    'familyName='+t+'&'+
    'genusName='+t+'&'+
    'speciesName='+t
    */
  }
  render() {
    return (
      <Col xs={12} sm={6} md={6} lg>
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
