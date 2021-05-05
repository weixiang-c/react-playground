import React, { Component } from "react";
import List from "./List";
import ListLoader from "./ListLoader";

import axios from "axios";

class GitUserInformation extends Component {
  state = {
    error: null,
    loading: true,
    repos: null,
  };
  constructor(props) {
    super(props);

    this.getGitInfos = this.getGitInfos.bind(this);
  }

  componentDidMount() {
    this.getGitInfos();
  }
  componentDidUpdate(prevProps) {}

  async getGitInfos() {
    const apiUrl = "https://api.github.com/users/weixiang-c/repos";
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      this.setState({ loading: false, repos: allRepos });
      this.render();
    });
  }

  render() {
    const ListLoading = ListLoader(List);
    return (
      <div>
        <ListLoading isLoading={this.state.loading} repos={this.state.repos} />
      </div>
    );
  }
}

export default GitUserInformation;
