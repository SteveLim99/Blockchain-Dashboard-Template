import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import getWeb3 from "./getWeb3";
import storageContract from "./contracts/SimpleStorage.json";

import { Home } from "./routes/Home";
import { Search } from "./routes/Search";
import { Upload } from "./routes/Upload";
import { Documents } from "./routes/Documents";
import { NotFound } from "./routes/NotFound";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      accounts: null,
      contract: null,
      documents: [],
      test: ""
    };
  }

  getAllFiles = async () => {
    const contract = this.state.contract;
    var docs = [];
    try {
      const numberOfFiles = await contract.methods.getLatestFileIndex();
      for (var i = 1; i <= numberOfFiles; i++) {
        var file = {
          fileName: "",
          fileVersion: "",
          fileContent: "",
          fileUrl: ""
        };
        file.fileUrl = await contract.methods.getHash(i).call();
        file.fileVersion = await contract.methods.getFileVersion(i).call();
        file.fileName = await contract.methods.getFileName(i).call();
        file.fileContent = await contract.methods.getFileContent(i).call();
        docs.push(file);
      }
      return docs;
    } catch (error) {
      console.log(error);
      alert("Error at getAllFiles(), check console for error message");
    }
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const account = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = await storageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        storageContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      this.setState({
        web3: web3,
        accounts: account,
        contract: instance,
        test: "wtv"
      });
      this.setState({
        docs: await this.getAllFiles()
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Layout title="Test">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} title="ArchiLens" />
              <Route
                exact
                path="/documents"
                render={props => (
                  <Documents
                    docs={[
                      {
                        fileName: "test1",
                        fileVersion: "1",
                        fileContent: "testing1",
                        fileUrl: "https1"
                      },
                      {
                        fileName: "test2",
                        fileVersion: "2",
                        fileContent: "testing2",
                        fileUrl: "https2"
                      },
                      {
                        fileName: "test3",
                        fileVersion: "3",
                        fileContent: "testing3",
                        fileUrl: "https3"
                      }
                    ]}
                    test={this.state.test}
                    isAuthed={true}
                  />
                )}
              />
              <Route exact path="/search" component={Search} />
              <Route exact path="/upload" component={Upload} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
