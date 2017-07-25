import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import {
  PageTemplate,
  Header,
  Footer,
  DepartmentList,
  ChipFilterList,
} from 'components'
import * as DataPortalService from '../../../services/DataPortalService'

const Wrapper = styled.div`
  margin: 120px 0px;
  .title {
    font-weight: 400;
    font-size: 30px;
    padding-left: 30px;
    color: #4B5353;
  }

  .accent-title {
    margin-top: 15px;
    border-top: 2px solid #ff7847;
  }
`

export default class DepartmentsPage extends React.Component {

  static propTypes = {
    match: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      fileComplete: null,
      files: [],
      departments: null,
    }
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id })

    DataPortalService.getRegistryDepartment(this.props.match.params.id).then(departments => {
      const list = [{ category: 'Departamentos', items: [] }]
      departments.map((department, i) => {
        list[0].items[i] = { id: i, name: department.department_name }
        return list
      })
      this.setState({ departments: list })
    })
  }

  render() {
    return (
      <Wrapper>
        <PageTemplate header={<Header filter={this.state.departments && <ChipFilterList list={this.state.departments} />} />} footer={<Footer />}>
          <Grid>
            <Row>
              <Col className="title" md={12}>Departamentos</Col>
              <Col className="accent-title" md={1} />
            </Row>
          </Grid>
          {/* this.state.departments && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <DepartmentList departments={this.state.departments} />
            </Col>
          </Row>
        </Grid>*/}
          <Grid>
            <Paper>
              <Row>
                accent
              </Row>
            </Paper>
          </Grid>
        </PageTemplate>
      </Wrapper>
    )
  }
}

