import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { ContactItem } from 'components'

const Wrapper = styled.div`
  background-color: #ffffff; 
  .title-two {
    font-weight: 400;
    font-size: 30px;
    color: #4B5353;
    padding-left: 20px;
  }

  .contacts {
    text-align: left;
    padding: 70px;

    .contact{
      padding: 20px;
    }
  }
`

export default class ContactsSection extends Component {
  static propTypes = {
    contacts: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Grid className="contacts">
          <Row>
            <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Contactos</Col>
            <Col className="accent-title" xs={2} sm={1} md={1} />
          </Row>
          <Row className="contact">
            {this.props.contacts.map((contact, i) => (
              <ContactItem key={i} contact={contact} />
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}
