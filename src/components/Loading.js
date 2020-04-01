import React from "react";
import styled from "styled-components";

const Styles = styled.div`

  .loading {
    display: none;
    margin-top: 10px;
  }

  .logo-container {
    justify-content: center;
    align-items: center;
  }

  .loader {
    border: 6px solid #f0f2f5;
    border-top: 6px solid #ff5800;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 80%;
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
  render() {
    return (
      <Styles>
        <div className="loading" ref={this.myRef} id="loading">
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
