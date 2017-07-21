import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { SearchItem } from 'components'

const Wrapper = styled.div`
padding-top: 150px;
text-align: center;
.img-size{
  width: 60%;
  padding: 15px;
}
h3{
  text-align: center;
  margin: 0;
  color:#444;
  font-weight: bold;
}
.static-content{
  padding: 20px;
  height: 100%;
  .about-main-title{
    font-size: 30px;
    margin: 40px 0;
  }
  .about-main-subtitle{
    font-size: 22px;
    margin: 40px 0;
  }
  .about-section-title{
  }
}
`

class SearchList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="static-content animated fadeIn">
                <h3 className="Search-main-title">Busqueda</h3>
                <Row>

                  <Col xs={3} sm={3} md={3} lg={3}>
                    Proveedor
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    Recurso
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    Taxonomía
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    Ubicación
                  </Col>
                </Row>
                {this.props.lista.map((item) => (
                  <SearchItem key={item.id} item={item} />
                ))}
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default SearchList
