import React, { Component } from "react";
import List from "./List";
import ListLoader from "./ListLoader";

import axios from "axios";

import styled from "styled-components";
import { Form } from "react-bootstrap";

class GitUserInformation extends Component {
  state = {
    error: null,
    loading: true,
    repos: null,
    apiUrl: null,
  };
  constructor(props) {
    super(props);

    this.getGitInfos = this.getGitInfos.bind(this);

    if (
      !sessionStorage.getItem("apiUrl") ||
      sessionStorage.getItem("apiUrl").length === null
    ) {
      sessionStorage.setItem(
        "apiUrl",
        "https://api.github.com/users/weixiang-c/repos"
      );
    }

    //console.log("Check");
    //console.log(sessionStorage.getItem("apiUrl"));
    this.state.apiUrl = sessionStorage.getItem("apiUrl");

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getGitInfos();
    //console.log(this.apiUrl);
  }
  componentDidUpdate(prevProps) {
    //console.log("did it update?");
    if (this.props.apiUrl !== prevProps.apiUrl) {
      //console.log("updating");
      this.getGitInfos();
    }
  }

  async getGitInfos() {
    //console.log("get info");
    //console.log(this.state.apiUrl);
    axios.get(this.state.apiUrl).then((repos) => {
      const allRepos = repos.data;
      this.setState({ loading: false, repos: allRepos });
      this.render();
    });
  }

  handleChange(event) {
    console.log("state changed");
    console.log(event.target.value);

    console.log("setting value");
    this.setState({ apiUrl: event.target.value });

    console.log("Value set");
    console.log(this.state.apiUrl);
  }

  render() {
    const ListLoading = ListLoader(List);
    const CoolDiv = styled.div`
      margin: 1em;
    `;
    const CoolButton = styled.input`
      background-color: #4caf50; /* Green */
      border-color: #4caf50;
      margin-left: 0.5em;
      margin-top: -0.2em;
      width: 10%;

      &:hover {
        background-color: #596b4d; /* Green */
        border-color: #596b4d;
      }
    `;
    const CoolTextbox = styled.input`
      width: 50em;
    `;

    const handleSubmit = (event) => {
      //event.preventDefault();
      //console.log("find me");
      //console.log(this.state.apiUrl);
      sessionStorage.setItem("apiUrl", this.state.apiUrl);
    };
    return (
      <div>
        <CoolDiv>
          <Form onSubmit={handleSubmit}>
            <CoolTextbox
              type="textbox"
              defaultValue={this.state.apiUrl}
              onChange={this.handleChange}
            />
            <CoolButton
              type="submit"
              className="btn btn-primary btn-sm form-control"
              value="Grab Repo"
            />
          </Form>
        </CoolDiv>
        <ListLoading isLoading={this.state.loading} repos={this.state.repos} />
      </div>
    );
  }
}

export default GitUserInformation;
