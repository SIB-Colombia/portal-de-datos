import React, { Component } from 'react'
import styled from 'styled-components'
import Drawer from 'material-ui/Drawer'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import { size, palette } from 'styled-theme'
import { List, ListItem } from 'material-ui/List'
import FilterList from 'material-ui/svg-icons/content/filter-list'
import IconButton from 'material-ui/IconButton'
import Replay from 'material-ui/svg-icons/av/replay'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AutoComplete from 'material-ui/AutoComplete'
import { FileSearchItem } from 'components'
import Checkbox from 'material-ui/Checkbox'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Slider from 'material-ui/Slider'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

const Wrapper = styled.div`
  float: left;
  left: -32px;
  position: relative;
  width: 35px;

  .drawer{
    margin-top: 65px;
    .paper > div:first-child {
        padding-bottom: 0px !important;
      }
    }
    .without-padding {
      padding: 0px;
    }
  }

  @media ${size('sm')}{
    position: absolute;
    left: 0;
    top:0;

    button{
      width: 30px !important;
    }
  }

  .style-btn{
    box-shadow: none !important;

    button{
      background-color: ${palette('primary', 0)} !important;
      height: 64px !important;
      border-radius: 0 !important;
    }
  }

  .separated {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    background-color: #838787 !important;
  }
`


const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}

export default class FileSearchFilter extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      dataSource: [],
      value: 1,
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleToggleMenu() {
    this.setState((prevState) => {
      return { open: !prevState.open }
    })
  }
  handleChange = (event, index, value) => this.setState({ value })

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    })
  };

  render() {
    return (
      <Wrapper>
        <div className="btnFilters animated fadeInLeft">
          <FloatingActionButton onTouchTap={this.handleToggleMenu} className="style-btn">
            <Menu />
          </FloatingActionButton>
        </div>
        <Drawer open={this.state.open} containerClassName="drawer" width={290}>
          <List>
            <ListItem primaryText="Filtros de búsqueda" leftIcon={<FilterList />} rightIcon={<IconButton className="material-icons" style={{ padding: 0, boxSizing: 'none' }} tooltip="Reiniciar filtros" tooltipPosition="bottom-left"><Replay /></IconButton>} disabled />
          </List>
          <FileSearchItem title="Taxonomía">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Nombre científico" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <AutoComplete
              hintText="Escriba el nombre científico"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
          </FileSearchItem>
          <FileSearchItem title="Categoría taxonómica">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Nombre científico" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <AutoComplete
              hintText="Escriba el nombre científico"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
          </FileSearchItem>
          <FileSearchItem title="Ubicación">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="País" />
              <MenuItem value={2} primaryText="Departamento" />
              <MenuItem value={3} primaryText="*Municipio" />
              <MenuItem value={4} primaryText="*Localidad" />
            </SelectField>
            <Grid fluid className="without-padding">
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Checkbox label="Amazonas" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Checkbox label="Chocó" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Checkbox label="Santander" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
              </Row>
            </Grid>
          </FileSearchItem>
          <FileSearchItem title="Hábitat">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Páramo" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <AutoComplete
              hintText="Escriba el nombre del hábitat"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
          </FileSearchItem>
          <FileSearchItem title="Elevación">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Sin filtro" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <Grid fluid className="without-padding">
              <Row>
                <Col xs={6} sm={6} md={6} lg={6}>720</Col>
                <Col xs={6} sm={6} md={6} lg={6}>9999</Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Slider style={{ height: 100 }} axis="y" />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Slider style={{ height: 100 }} axis="y" />
                </Col>
              </Row>
              <Divider className="separated" />
              <Row>
                <Col md><RaisedButton label="Limpiar" /></Col>
                <Col md><RaisedButton label="Añadir" primary /></Col>
              </Row>
            </Grid>
          </FileSearchItem>
          <FileSearchItem title="Profundidad">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Entre" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <Grid fluid className="without-padding">
              <Row>
                <Col xs={6} sm={6} md={6} lg={6}>720</Col>
                <Col xs={6} sm={6} md={6} lg={6}>9999</Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Slider style={{ height: 100 }} axis="y-reverse" />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Slider style={{ height: 100 }} axis="y-reverse" />
                </Col>
              </Row>
              <Divider className="separated" />
              <Row>
                <Col md><RaisedButton label="Limpiar" /></Col>
                <Col md><RaisedButton label="Añadir" primary /></Col>
              </Row>
            </Grid>
          </FileSearchItem>
          <FileSearchItem title="Publicador">
            <AutoComplete
              hintText="Escriba el nombre del publicador"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
            <Grid fluid className="without-padding">
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Instituto Humboldt" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Publicador 2" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Publicador mu..." />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
              </Row>
            </Grid>
          </FileSearchItem>
          <FileSearchItem title="Fecha del evento">
            <SelectField
              value={this.state.value}
              onChange={this.handleChange}
              labelStyle={{ color: '#838787' }}
              underlineStyle={{ borderColor: '#FF7847' }}
              iconStyle={{ fill: '#838787' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
            >
              <MenuItem value={1} primaryText="Entre" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <Grid fluid className="without-padding">
              <Row>
                <Col md>
                  <DatePicker
                    hintText="Fecha inicio"
                    mode="landscape"
                  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>Y</Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <DatePicker
                    hintText="Fecha fin"
                    mode="landscape"
                  />
                </Col>
              </Row>
              <Divider className="separated" />
              <Row>
                <Col md><RaisedButton label="Limpiar" /></Col>
                <Col md><RaisedButton label="Añadir" primary /></Col>
              </Row>
            </Grid>
          </FileSearchItem>
          <FileSearchItem title="Nombre del colector">
            <AutoComplete
              hintText="Escriba el nombre del colector"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
          </FileSearchItem>
          <FileSearchItem title="Publicador">
            <AutoComplete
              hintText="Escriba el nombre del recurso"
              dataSource={colors}
              menuProps={menuProps}
              underlineStyle={{ borderColor: '#FF7847' }}
              underlineFocusStyle={{ borderColor: '#FF7847' }}
              hintStyle={{ color: '#838787' }}
            />
            <Grid fluid className="without-padding">
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Nombre del recurso" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>55.814</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Nombre del recurso" />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>57.326</Col>
              </Row>
              <Row between="xs" middle="xs">
                <Col xs={6} sm={6} md={9} lg={9}>
                  <Checkbox label="Nombre del recur..." />
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>58.614</Col>
              </Row>
            </Grid>
          </FileSearchItem>
        </Drawer>
      </Wrapper>
    )
  }
}
