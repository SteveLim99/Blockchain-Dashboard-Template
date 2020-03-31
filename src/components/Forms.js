import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .form-container {
    background-color: #f0f2f5;
    padding: 2%;
    border-radius: 10px;
  }
`;

export class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <Form className="form-container">
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.File id="custom-file" label="Custom file input" custom />
          <Button variant="primary" type="submit" onClick>
            Submit
          </Button>
        </Form>
      </Styles>
    );
  }
}
