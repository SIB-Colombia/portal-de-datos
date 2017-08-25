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
import theme from '../../themes/default'

const Wrapper = styled.div`
margin-top: 70px;
.title {
  padding-top: 65px;
  font-weight: 600;
  font-size: ${theme.fonts.titleTwo.font};
  padding-left: 30px;
  color: ${theme.palette.text[0]};
  span {
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
  }
}

.accent-title {
    margin-top: 15px;
    border-top: 2px solid ${theme.palette.basescale[6]};
}

.icon {
  fill: ${theme.palette.basescale[6]} !important;
  width: 30px !important;
  height: 30px !important;
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
        <Wrapper style={this.state.open ? { marginLeft: 310 } : { marginLeft: 'auto' }}>
          <Grid>
            <Row>
              <Col className="title" xs={12} sm={12} md={12} lg={12}>BÚSQUEDA POR PUBLICADORES <ChevronRight className="icon" viewBox="0 0 25 15" /> 45.954.321 <span>RESULTADOS</span></Col>
              <Col className="accent-title" xs={3} sm={2} md={1} lg={1} />
            </Row>
            {this.state.entities && <EntitiesList entities={this.state.entities} />}
          </Grid>
        </Wrapper>
      </PageTemplate>
    )
  }
}
