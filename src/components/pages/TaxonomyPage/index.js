import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {injectGlobal} from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SchemaForm from 'react-schema-form';
import {
  PageTemplate,
  Header,
  Footer,
  FileDetail,
  FileCarousel,
  FileComment,
  FileHeader,
  FileTab,
  FileMostRecent,
  TaxonomyList
} from 'components';


class TaxonomyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
      		{id:"1", alias:"anfibios", name:"amphibians"},
			{id:"2", alias:"artrópodos", name:"insects"},
			{id:"3", alias:"aves", name:"birds"},
			{id:"4", alias:"mamíferos", name:"mammals"},
			{id:"5", alias:"moluscos", name:"birds"},
			{id:"6", alias:"plantas", name:"plants"},
			{id:"7", alias:"reptiles", name:"reptiles"}]
    }
  }

  componentDidMount() {}

  componentWillMount() {

  }

  render() {

    return (
      <PageTemplate header={< Header />} footer={< Footer />} wallpaper='File'>
        {this.state.list && <Grid>
          <Row className="animated fadeIn">
            <Col xs={12} lg={12}>
              <TaxonomyList taxons={this.state.list}/>
            </Col>
          </Row>
        </Grid>}
      </PageTemplate>
    )
  }
}

export default TaxonomyPage;
