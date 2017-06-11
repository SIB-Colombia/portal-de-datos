import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {IconLink, Link, TaxonItem} from 'components';

const Wrapper = styled.div `
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

class TaxonomyList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={12}>
              <Paper zDepth={1} className="static-content animated fadeIn">
                <h3 className="taxnomy-main-title">Taxonomía</h3>
                <Row>
                  {this.props.taxons.map((item) => (
	                  <TaxonItem key={item.id}  taxon={item} />
                  ))}
                </Row>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default TaxonomyList;
