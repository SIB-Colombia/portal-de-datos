import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div `
  .title-two {
    font-size: 30px;
    padding-left: 20px;
    color: #4B5353;
    margin-top: 40px;
  }
  .accent-title {
    margin-top: 10px;
    border-top: 2px solid #ff7847;
  }

  .more-details {
    color: #4B5353;
    font-size: 20px;
    line-height: 45px;
    font-weight: 200;
    padding: 30px 0px;
    .details-title{
      font-weight: 600;
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
        <Col className="title-two" md={12}>Multimedia</Col>
        <Col className="accent-title" md={11} />
        <Grid fluid>
          <Row className="more-details">
            {this.state.multimedia.type && <Col md={6} className="details-title">Tipo</Col>}
            {this.state.multimedia.type && <Col md={6}>{this.state.multimedia.type}</Col>}
            {this.state.multimedia.format && <Col md={6} className="details-title">Formato</Col>}
            {this.state.multimedia.format && <Col md={6}>{this.state.multimedia.format}</Col>}
            {this.state.multimedia.identifier && <Col md={6} className="details-title">Identificador</Col>}
            {this.state.multimedia.identifier && <Col md={6}>{this.state.multimedia.identifier}</Col>}
            {this.state.multimedia.references && <Col md={6} className="details-title">Referencias</Col>}
            {this.state.multimedia.references && <Col md={6}>{this.state.multimedia.references}</Col>}
            {this.state.multimedia.title && <Col md={6} className="details-title">Título</Col>}
            {this.state.multimedia.title && <Col md={6}>{this.state.multimedia.title}</Col>}
            {this.state.multimedia.description && <Col md={6} className="details-title">Descripción</Col>}
            {this.state.multimedia.description && <Col md={6}>{this.state.multimedia.description}</Col>}
            {this.state.multimedia.created && <Col md={6} className="details-title">Fecha de creación</Col>}
            {this.state.multimedia.created && <Col md={6}>{this.state.multimedia.created}</Col>}
            {this.state.multimedia.creator && <Col md={6} className="details-title">Autor</Col>}
            {this.state.multimedia.creator && <Col md={6}>{this.state.multimedia.creator}</Col>}
            {this.state.multimedia.contributor && <Col md={6} className="details-title">Parte asociada</Col>}
            {this.state.multimedia.contributor && <Col md={6}>{this.state.multimedia.contributor}</Col>}
            {this.state.multimedia.publisher && <Col md={6} className="details-title">Editor</Col>}
            {this.state.multimedia.publisher && <Col md={6}>{this.state.multimedia.publisher}</Col>}
            {this.state.multimedia.audience && <Col md={6} className="details-title">Audiencia</Col>}
            {this.state.multimedia.audience && <Col md={6}>{this.state.multimedia.audience}</Col>}
            {this.state.multimedia.source && <Col md={6} className="details-title">Fuente</Col>}
            {this.state.multimedia.source && <Col md={6}>{this.state.multimedia.source}</Col>}
            {this.state.multimedia.license && <Col md={6} className="details-title">Licencia</Col>}
            {this.state.multimedia.license && <Col md={6}>{this.state.multimedia.license}</Col>}
            {this.state.multimedia.rightsHolder && <Col md={6} className="details-title">Titular de los derechos</Col>}
            {this.state.multimedia.rightsHolder && <Col md={6}>{this.state.multimedia.rightsHolder}</Col>}
            {this.state.multimedia.datasetID && <Col md={6} className="details-title">ID del conjunto de datos</Col>}
            {this.state.multimedia.datasetID && <Col md={6}>{this.state.multimedia.datasetID}</Col>}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default MultimediaSection
