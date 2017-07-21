import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import ViewList from 'material-ui/svg-icons/action/view-list'
import Apps from 'material-ui/svg-icons/navigation/apps'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { EntitiesItem } from 'components'
import Pagination from 'material-ui-pagination'

const Wrapper = styled.div`
  .accent-divider {
    margin-top: -20px;
    border-top: 2px solid #CCCCCC;
  }

  .entidad-divider {
    border-top: 2px solid #CCCCCC;
  }

  .color-select{
    color: #ff7847 !important;
  }

  .color-unselect{
    color: #4B5353 !important;
  }

  .pagination {
      margin-top: 20px;
      text-align: center
  }
`

export default class EntitiesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mode: 'list',
      value: 1,
      total: 20,
      display: 7,
      number: 1,
    }
  }

  handleChange = (event, index, value) => this.setState({ value });
  handleView = (value) => this.setState({ mode: value });

  render() {
    return (
      <Wrapper>
        <Row style={{ marginTop: 30 }}>
          <Col md={12}>
            <Row end="md">
              <Col md={3} className="text-align">
                <IconButton tooltip="modo grilla" touch tooltipPosition="top-center" onTouchTap={() => this.handleView('grid')}>
                  <Apps className={this.state.mode === 'grid' ? 'color-select' : 'color-unselect'} />
                </IconButton>
                <IconButton tooltip="modo lista" touch tooltipPosition="top-center" onTouchTap={() => this.handleView('list')}>
                  <ViewList className={this.state.mode === 'list' ? 'color-select' : 'color-unselect'} />
                </IconButton>
              </Col>
              <Col md={1} className="align-center">
                <SelectField value={this.state.value} onChange={this.handleChange} style={{ width: 200 }}>
                  <MenuItem value={1} primaryText="A/Z" />
                  <MenuItem value={2} primaryText="Recientes" />
                  <MenuItem value={3} primaryText="Número de registros" />
                </SelectField>
              </Col>
            </Row>
          </Col>
          <Col className="accent-divider" md={12} />

          <Col md={12}>
            <EntitiesItem />
          </Col>
        </Row>
        <div className="pagination">
          <Pagination total={this.state.total} current={this.state.number} display={this.state.display} onChange={number => this.setState({ number })} />
        </div>
      </Wrapper>
    )
  }
}
