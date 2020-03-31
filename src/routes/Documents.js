import React, { Component } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { DocumentTable } from "../components/DocumentTable";
import { Form, Col, Button } from "react-bootstrap";

const Styles = styled.div`
  .form-container {
    background-color: #f0f2f5;
    padding: 2%;
    border-radius: 3px;
    box-shadow: 10px 10px 10px -10px grey;
    width: 95%;
    margin-left: 45px;
    margin-bottom: 30px;
  }
`;

export class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      searchVersion: "",
      filteredDocs: []
    };
  }
  render() {
    return (
      <Styles>
        <Header title="Document List" />
        <Form className="form-container">
          <Form.Row>
            <Form.Group as={Col} controlId="search-name">
              <Form.Label>File Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter file name"
                onChange={this.handleChanges}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="search-version">
              <Form.Label>File Version</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter file version"
                onChange={this.handleChanges}
              />
            </Form.Group>
          </Form.Row>
        </Form>
        <DocumentTable docs={this.state.filteredDocs} />
        <p>{this.state.filteredDocs}</p>
      </Styles>
    );
  }
}
