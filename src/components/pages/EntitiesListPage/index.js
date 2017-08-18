import React, { Component } from 'react'
import styled from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
  EntitiesList,
  FileSearchFilter,
  ResourceNameSearchItem,
  PublisherSearchItem,
} from 'components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import * as EntitiesRecordService from '../../../services/EntitiesRecordService'

const Wrapper = styled.div`
  margin: 85px 0px;
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

export default class EntitiesListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entities: null,
      open: true,
    }
    this.openMenu = this.openMenu.bind(this)
  }

  componentWillMount() {
    EntitiesRecordService.getEntitiesList().then(data => {
      this.setState({
        entities: data,
      })
    })
  }

  openMenu(open) {
    this.setState({
      open,
    })
  }

  render() {
    return (
      <PageTemplate
        header={
          <Header
            filter={
              <FileSearchFilter open={this.openMenu}>
                <PublisherSearchItem />
                <ResourceNameSearchItem />
              </FileSearchFilter>
            }
          />
        }
        footer={<Footer />}
      >
        <Wrapper style={this.state.open ? { marginLeft: 350 } : { marginLeft: 'auto' }}>
          <Grid>
            <Row>
              <Col className="title" md={12}>BÚSQUEDA POR PUBLICADORES <ChevronRight /> <span>45.954.321</span> RESULTADOS</Col>
              <Col className="accent-title" md={1} />
            </Row>
            {this.state.entities && <EntitiesList entities={this.state.entities} />}
          </Grid>
        </Wrapper>
      </PageTemplate>
    )
  }
}
