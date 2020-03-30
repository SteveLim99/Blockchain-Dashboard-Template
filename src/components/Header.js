import React, { Component } from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import jumbotronImage from "../images/skyline.jpg";

const Styles = styled.div`
  .jumbotron {
    margin-top: 0px;
    width: 100vw;
  }

  .header {
    width: 75%;
    background-size: cover;
    color: white;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
`;

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var title = this.props.title;
    if (
      title == "Advance Search" ||
      title == "Upload" ||
      title == "Document List"
    ) {
      return (
        <Styles>
          <Jumbotron
            style={{
              backgroundImage: `url(${jumbotronImage})`,
              padding: 20
            }}
            fluid
          >
            <h1 className="header">{title}</h1>
          </Jumbotron>
        </Styles>
      );
    } else {
      return (
        <Styles>
          <Jumbotron
            style={{
              backgroundImage: `url(${jumbotronImage})`,
              padding: 80
            }}
            fluid
          >
            <h1 className="header">{title}</h1>
          </Jumbotron>
        </Styles>
      );
    }
  }
}
