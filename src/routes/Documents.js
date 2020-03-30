import React, { Component } from "react";
import { Header } from "../components/Header";

export class Documents extends Component {
  render() {
    let documents = this.props.docs;
    for (var document of documents) {
      console.log(document);
    }
    return (
      <div>
        <Header title="Document List" />
        <h2>Documents</h2>
        <p>whatever</p>
      </div>
    );
  }
}
