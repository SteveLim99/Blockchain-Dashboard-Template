import React, { Component } from "react";
import { Header } from "../components/Header";
import { Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  .form-container {
    background-color: #f0f2f5;
    padding: 2%;
    border-radius: 3px;
    box-shadow: 10px 10px 10px -10px grey;
    width: 85%;
    margin-left: 150px;
  }
`;

export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileVersion: "",
      fileContent: "",
      uploadedFile: null
    };
  }

  handleChanges = e => {
    e.preventDefault();
    let id = e.target.id;
    let val = e.target.value;
    if (id === "form-name") {
      this.setState({ fileName: val });
    } else if (id === "form-version") {
      this.setState({ fileVersion: val });
    } else if (id === "form-content") {
      this.setState({ fileContent: val });
    } else {
      this.setState({ uploadedFile: e.target.files[0] });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { fileName, fileVersion, fileContent, uploadedFile } = this.state;
    const { contract, accounts } = this.props;

    // Uploading file to blob storage and obtaining download link as response
    // Response will be added to blockchain
    const formData = new FormData();
    formData.append("file", uploadedFile);
    try {
      var res = await axios.post("http://localhost:9000/upload", formData, {});
      // Uploading the file URL and the rest of the data to the blockchain
      if (res.status === 200) {
        try {
          const fileUrl = res.data;
          await contract.methods
            .set(fileUrl, fileVersion, fileName, fileContent)
            .send({ from: accounts[0] });
        } catch (error) {
          alert("Blockchain Submission Error, check console for error message");
        }
      }
    } catch (error) {
      alert("File submission error, check console for error message");
    }
  };

  render() {
    return (
      <Styles>
        <Header title="Upload" />
        <Form className="form-container">
          <Form.Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="form-name"
              onChange={this.handleChanges}
            >
              <Form.Label>Label</Form.Label>
              <Form.Control required type="text" placeholder="File Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="form-version"
              onChange={this.handleChanges}
            >
              <Form.Label>Version</Form.Label>
              <Form.Control required type="number" placeholder="File Version" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="form-content" onChange={this.handleChanges}>
            <Form.Label>File Content</Form.Label>
            <Form.Control
              required
              type="text"
              as="textarea"
              rows="3"
              placeholder="Key Highlights of Document"
            />
          </Form.Group>
          <Form.Group
            required
            type="file"
            onChange={this.handleChanges}
            controlId="form-file"
          >
            <Form.File required type="file" label="Attach a File" custom />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <p></p>
      </Styles>
    );
  }
}
