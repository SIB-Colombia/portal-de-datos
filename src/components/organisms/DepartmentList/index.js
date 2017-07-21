import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { DepartmentItem } from 'components'

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

class DepartmentList extends React.Component {

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
                <h3 className="departments-main-title">Departamentos</h3>
                {this.props.departments.map((item) => (
                  <DepartmentItem department={item} />
                ))}
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default DepartmentList
