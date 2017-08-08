import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText } from 'material-ui/Card'

const Wrapper = styled.div`
  .paper > div:first-child {
    padding-bottom: 0px !important;
  }
`
export default class FileSearchItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Card className="paper">
          <CardHeader
            title={this.props.title}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable style={{ background: '#F3F8F8' }}>
            {this.props.children}
          </CardText>
        </Card>
      </Wrapper>
    )
  }
}
