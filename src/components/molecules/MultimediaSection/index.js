import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import theme from '../../themes/default'

const Wrapper = styled.div`
  .title-two {
    font-size: 24px;
    color: ${theme.palette.text[0]};
    margin-top: 60px;
  }
  .accent-title {
    margin-top: 20px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }

  .more-details {
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleTwo.font};
    line-height: 28px;
    font-weight: ${theme.fonts.subTitleTwo.weight};
    padding: 20px;
    .details-title{
      font-weight: 600;
      margin-top: 1px;
      margin-bottom: 1px;
    }
  }
`

class MultimediaSection extends React.Component {

  static propTypes = {
    multimedia: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      multimedia: [],
    }
  }

  componentWillMount() {
    this.setState({
      multimedia: this.props.multimedia,
    })
  }

  render() {
    return (
      <Wrapper>
        <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Multimedia</Col>
        <Col className="accent-title" xs={11} sm={11} md={11} lg={11} />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row className="more-details">
            {this.state.multimedia.type && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Tipo</Col>}
            {this.state.multimedia.type && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.type}</Col>}
            {this.state.multimedia.format && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Formato</Col>}
            {this.state.multimedia.format && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.format}</Col>}
            {this.state.multimedia.identifier && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Identificador</Col>}
            {this.state.multimedia.identifier && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.identifier}</Col>}
            {this.state.multimedia.references && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Referencias</Col>}
            {this.state.multimedia.references && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.references}</Col>}
            {this.state.multimedia.title && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Título</Col>}
            {this.state.multimedia.title && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.title}</Col>}
            {this.state.multimedia.description && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Descripción</Col>}
            {this.state.multimedia.description && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.description}</Col>}
            {this.state.multimedia.created && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fecha de creación</Col>}
            {this.state.multimedia.created && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.created}</Col>}
            {this.state.multimedia.creator && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Autor</Col>}
            {this.state.multimedia.creator && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.creator}</Col>}
            {this.state.multimedia.contributor && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Parte asociada</Col>}
            {this.state.multimedia.contributor && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.contributor}</Col>}
            {this.state.multimedia.publisher && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Editor</Col>}
            {this.state.multimedia.publisher && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.publisher}</Col>}
            {this.state.multimedia.audience && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Audiencia</Col>}
            {this.state.multimedia.audience && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.audience}</Col>}
            {this.state.multimedia.source && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Fuente</Col>}
            {this.state.multimedia.source && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.source}</Col>}
            {this.state.multimedia.license && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Licencia</Col>}
            {this.state.multimedia.license && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.license}</Col>}
            {this.state.multimedia.rightsHolder && <Col xs={12} sm={6} md={6} lg={6} className="details-title">Titular de los derechos</Col>}
            {this.state.multimedia.rightsHolder && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.rightsHolder}</Col>}
            {this.state.multimedia.datasetID && <Col xs={12} sm={6} md={6} lg={6} className="details-title">ID del conjunto de datos</Col>}
            {this.state.multimedia.datasetID && <Col xs={12} sm={6} md={6} lg={6}>{this.state.multimedia.datasetID}</Col>}
          </Row>
        </Col>
      </Wrapper>
    )
  }
}

export default MultimediaSection
