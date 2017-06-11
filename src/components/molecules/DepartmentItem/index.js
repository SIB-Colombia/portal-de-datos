import React from 'react';
import styled from 'styled-components';
import {Link} from 'components';
import {Grid, Row, Col} from 'react-flexbox-grid';

class DepartmentItem extends React.Component {

  constructor(props) {
    super(props);
  }
  
  destino(n){
    return '/search?departmentName='+this.props.department.department_name;
  }
  

  render() {
    //console.log(this.props.department.department_name);
    return (
      <Link to={this.destino(this.props.department.department_name)}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            {this.props.department.department_name}
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            XXX Registros
          </Col>
        </Row>
      </Link>
    )
  }
}

export default DepartmentItem;
