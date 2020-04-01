import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .logo-container {
    display: none;
    justify-content: center;
    align-items: center;
  }

  .loader {
    border: 6px solid #f0f2f5;
    border-top: 6px solid #ff5800;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.25s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <Styles>
        <div ref={this.myRef}>
          <div className="logo-container">
            <img
              src={require("../images/avanade.jpg")}
              alt="avanade.jpg missing"
            />
          </div>
          <div className="logo-container">
            <div className="loader"></div>
          </div>
        </div>
      </Styles>
    );
  }
}