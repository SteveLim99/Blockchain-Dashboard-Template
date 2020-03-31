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
              <Form.Label>Label</Form.Label>
              <Form.Control required type="text" placeholder="File Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Version</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="File Version"
                defaultValue="0"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>File Content</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group>
            <Form.File id="custom-file" label="Custom file input" custom />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Styles>
    );
  }
}
