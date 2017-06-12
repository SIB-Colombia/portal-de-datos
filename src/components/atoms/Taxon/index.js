import React from 'react';
import styled from 'styled-components';
import {Link, TitleSection, FileStatus} from 'components';
import {size, palette, font} from 'styled-theme';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Comment from 'material-ui/svg-icons/communication/comment';
import Divider from 'material-ui/Divider';

const Wrapper = styled.div `

margin: 10px;

.card{

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 8px, rgba(0, 0, 0, 0.23) 0px 3px 8px !important;
  }
  img{
    max-width: 200px !important;
    min-width: 200px !important;
  }
}

.card-title{
  padding: 0px 10px 10px 10px !important;
}

.card-title  > span:first-child{
  font-size: ${font('xxs')} !important;
  font-weight: lighter;
  font-style: italic;
	color: ${palette('basescale', 2)} !important;
}
.card-title  > span:last-child{
  font-size: 10px !important;
}


.card-actions{
  padding: 0px !important;

  ul{
    font-size: 13px !important;
    background:  ${palette('basescale', 10)} !important;;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 30px !important;
    color:white !important;
    border-radius: 0px !important;
    text-align: justify;
    div{
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
       max-width: 200px;
    }

  }
}
`

class Taxon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Wrapper>
        <Link to={`/occurrence/${this.props.id}`}>
          <Card className="space-card card">
            <CardTitle title={this.props.name} className="card-title" subtitle={this.props.rank}/>
            <CardActions className="card-actions align-center">
              <ul>
                <li>Reino: {this.props.taxonomy.kingdom_name}</li>
                <li>Filo: {this.props.taxonomy.phylum_name}</li>
                <li>Clase: {this.props.taxonomy.class_name}</li>
                <li>Orden: {this.props.taxonomy.order_name}</li>
                <li>Familia: {this.props.taxonomy.family_name}</li>
                <li>Género: {this.props.taxonomy.genus_name}</li>
                <li>Especie: {this.props.taxonomy.species_name}</li>
                <li>Epiteto: {this.props.taxonomy.specific_epithet}</li>
		          </ul>
            </CardActions>
          </Card>
        </Link>
      </Wrapper>
    )
  }
}

export default Taxon;
