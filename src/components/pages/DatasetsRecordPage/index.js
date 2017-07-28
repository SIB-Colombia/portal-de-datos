import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PageTemplate, Header, Footer } from 'components'

const Wrapper = styled.div`
  .title {
    font-weight: 400;
    font-size: 18px;
    color: #4B5353;
    margin-top: 85px;
  }

  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }
`

export default class DatasetsRecordPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header />} footer={<Footer />}>
          <Grid>
            <Row center="xs">
              <Col className="title" xs={12} sm={12} md={12} lg={12}>RECURSO</Col>
              <Col className="accent-title" xs={2} sm={1} md={1} lg={1} />
            </Row>
          </Grid>
        </PageTemplate>
      </Wrapper>
    )
  }
}
