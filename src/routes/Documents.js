import React, { Component } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { DocumentTable } from "../components/DocumentTable";

export class Documents extends Component {
  render() {
    let documents = this.props.docs;
    // for (var document of documents) {
    //   console.log(document);
    // }
    return (
      <div>
        <Header title="Document List" />
        <DocumentTable docs={documents} />
      </div>
    );
  }
}
