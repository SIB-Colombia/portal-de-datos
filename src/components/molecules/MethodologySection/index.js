import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import _ from 'lodash'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'

const Wrapper = styled.div`
`

export default class MethodologySection extends Component {
  render() {
    return (
      <Wrapper>
        {_.map(['Area de estudio', 'Muestreo', 'Control de calidad'], (key) => (
          <Row key={key}>
            <Col className="third-title" xs={12} sm={12} md={12} lg={12}>{key}</Col>
            <Col md>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos impedit amet rerum! Itaque magni eveniet tempore dicta, nemo veritatis temporibus unde in molestias rem aperiam veniam consequuntur iste qui!</Col>
          </Row>
        ))}
        <Row>
          <Col className="third-title" xs={12} sm={12} md={12} lg={12}>Descripción de la metodología paso a paso:</Col>
          <Stepper
            linear={false}
            orientation="vertical"
          >
            {_.map([1, 2, 3], (key) => (
              <Step active key={key}>
                <StepLabel icon={key} />
                <StepContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sed. Quam sit, optio aliquam laboriosam nam soluta aspernatur adipisci molestiae iure debitis laudantium repellat quo! Sit debitis vel reprehenderit perspiciatis?
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Row>
      </Wrapper>
    )
  }
}