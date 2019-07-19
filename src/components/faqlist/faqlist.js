import React, { Component } from 'react';
import './faqlist.css';
import Faq from 'components/faq';
import { ButtonGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

export default class Faqlist extends Component {
  constructor() {
    super();
    this.state = {
      value: 'boletos',
    };
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col sm={6} lg={3} md={9} className="center">
            <ButtonGroup 
              className="btn-block buttonWidth"
              fluid={true}
              vertical
              size="lg"
            >
              <Button 
                className="buttonItem"
                fluid={true}
                color="primary"
                onClick={() => this.setState({ value: 'boletos' })}
              >
                BOLETOS
              </Button>
              <Button
                className="buttonItem"
                fluid={true}
                color="primary"
                onClick={() => this.setState({ value: 'paqueteria' })}
              >
                PAQUETERIA
              </Button>
              <Button
                className="buttonItem"
                fluid={true}
                color="primary"
                onClick={() => this.setState({ value: 'compras' })}
              >
                COMPRAS
              </Button>
              <Button
                className="buttonItem"
                fluid={true}
                color="primary"
                onClick={() => this.setState({ value: 'abordando' })}
              >
                ABORDANDO
              </Button>
            </ButtonGroup>
          </Col>
          <Col sm={3} lg={6} md={3} fluid={true} className="col-group">
            <ButtonGroup className="btn-block buttonWidth first" vertical size="lg">
              <Button
                className="buttonItem"
                color="primary"
                onClick={() => this.setState({ value: 'boletos' })}
              >
                BOLETOS
              </Button>
              <div className="divider" />
              <Button
                className="buttonItem"
                color="primary"
                onClick={() => this.setState({ value: 'paqueteria' })}
              >
                PAQUETERIA
              </Button>
            </ButtonGroup>
          </Col>
          <Col sm={3} lg={6} md={3} className="col-group">
            <ButtonGroup className="btn-block buttonWidth " vertical size="lg">
              <Button
                className="buttonItem"
                color="primary"
                onClick={() => this.setState({ value: 'compras' })}
              >
                COMPRAS
              </Button>
              <div className="divider" />
              <Button
                className="buttonItem"
                color="primary"
                onClick={() => this.setState({ value: 'abordando' })}
              >
                ABORDANDO
              </Button>
            </ButtonGroup>
          </Col>
          <Col sm={6} lg={9} md={9}>
            <div>
              <Faq value={this.state.value} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.bool,
  active: PropTypes.bool,
};
