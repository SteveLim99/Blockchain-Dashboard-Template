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
    width: 90%;
    background-size: cover;
    color: white;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Header = props => (
  <Styles>
    <Jumbotron
      style={{
        backgroundImage: `url(${jumbotronImage})`,
        padding: 135
      }}
      fluid
    >
      <h1 className="header">{props.title}</h1>
    </Jumbotron>
  </Styles>
);
