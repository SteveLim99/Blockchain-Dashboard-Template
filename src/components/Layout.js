import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import jumbotronImage from "../images/skyline.jpg";

const Styles = styled.div`
  .container {
    margin-left: 180px;
    margin-top: 0px;
  }
`;

export const Layout = props => (
  <Styles>
    {props.children}
  </Styles>
);
