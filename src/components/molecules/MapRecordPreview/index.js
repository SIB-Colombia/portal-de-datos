import React from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Paper from 'material-ui/Paper';
import {Link, TitleSection} from 'components';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Badge from 'material-ui/Badge';
const format = require('format-number-with-string');

const Wrapper = styled.div `

`
class MapRecordPreview extends React.Component {

  constructor(props) {
    super(props);
    //console.log('------', this.props.data);
  }

  render() {

    return (
      <Wrapper {...this.props}>
        <TitleSection lighter={500}>No. registros</TitleSection>
        <List>
           <ListItem  primaryText='en total' leftIcon={ <Badge className='badge-circle' badgeContent={format(this.props.data.count, '#.###.')} primary={true} />}/>
        </List>
        <TitleSection lighter={500}>Conjuntos de datos</TitleSection>
        <List>
          {this.props.data.facets[2].counts.map((elem, i) =>
              <ListItem key={i} primaryText={elem.key} leftIcon={ <Badge className='badge-circle' badgeContent={format(elem.doc_count, '#.###.')} primary={true} />}/>
          )}
        </List>
        <TitleSection lighter={500}>Publicadores</TitleSection>
        <List>
          {this.props.data.facets[1].counts.map((elem, i) =>
              <ListItem key={i} primaryText={elem.key} leftIcon={ <Badge className='badge-circle' badgeContent={format(elem.doc_count, '#.###.')} primary={true} />}/>
          )}
        </List>
        <TitleSection lighter={500}>Base del registro</TitleSection>
        <List>
          {this.props.data.facets[0].counts.map((elem, i) =>
              <ListItem key={i} primaryText={elem.key} leftIcon={ <Badge className='badge-circle' badgeContent={format(elem.doc_count, '#.###.')} primary={true} />}/>
          )}
        </List>
        <TitleSection lighter={500}>Colecciones</TitleSection>
        <List>
          {this.props.data.facets[3].counts.map((elem, i) =>
              <ListItem key={i} primaryText={elem.key} leftIcon={ <Badge className='badge-circle' badgeContent={format(elem.doc_count, '#.###.')} primary={true} />}/>
          )}
        </List>

      </Wrapper>
    )
  }
}

export default MapRecordPreview;
