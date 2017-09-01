import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import ViewList from 'material-ui/svg-icons/action/view-list'
import Apps from 'material-ui/svg-icons/navigation/apps'
import FlatButton from 'material-ui/FlatButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { EntitiesItem, EntitiesSmallItem } from 'components'
import Pagination from 'material-ui-pagination'
import Masonry from 'react-masonry-component'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'

const Wrapper = styled.div`
  .accent-divider {
    border-top: 1px solid #CCCCCC;
    margin-bottom: 15px;
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

  static propTypes = {
    entities: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      mode: 'list',
      value: 1,
      total: 20,
      display: 7,
      number: 1,
      openD: false,
      anchorEl: null,
    }
  }

  handleChange = (event, index, value) => this.setState({ value });
  handleView = (value) => this.setState({ mode: value });


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      openD: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      openD: false,
    })
  }

  render() {
    return (
      <Wrapper>
        <Row style={{ marginTop: 30 }}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Row middle="xs" end="xs">
              <Col xs={4} sm={4} md={3} lg={3} className="text-align">
                <IconButton tooltip="modo grilla" touch tooltipPosition="top-center" onTouchTap={() => this.handleView('grid')}>
                  <Apps className={this.state.mode === 'grid' ? 'color-select' : 'color-unselect'} />
                </IconButton>
                <IconButton tooltip="modo lista" touch tooltipPosition="top-center" onTouchTap={() => this.handleView('list')}>
                  <ViewList className={this.state.mode === 'list' ? 'color-select' : 'color-unselect'} />
                </IconButton>
              </Col>
              <Col xs={3} sm={2} md={1} lg={1}>
                <FlatButton
                  onClick={this.handleTouchTap}
                  label="A/N"
                />
                <Popover
                  open={this.state.openD}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                  onRequestClose={this.handleRequestClose}
                  animation={PopoverAnimationVertical}
                >
                  <Menu>
                    <MenuItem primaryText="..." />
                    <MenuItem primaryText="..." />
                    <MenuItem primaryText="..." />
                  </Menu>
                </Popover>
              </Col>
            </Row>
          </Col>
          <Col className="accent-divider" xs={12} sm={12} md={12} lg={12} />
          <Col xs={12} sm={12} md={12} lg={12} >
            <Masonry>
              {this.props.entities && this.state.mode === 'grid' && this.props.entities.map((entitie) => (
                <EntitiesSmallItem key={entitie.id} entitie={entitie} />
              ))}
              {this.props.entities && this.state.mode === 'list' && this.props.entities.map((entitie) => (
                <EntitiesItem key={entitie.id} entitie={entitie} />
              ))}
            </Masonry>
          </Col>
        </Row>
        <div className="pagination">
          <Pagination total={this.state.total} current={this.state.number} display={this.state.display} onChange={number => this.setState({ number })} />
        </div>
      </Wrapper>
    )
  }
}
