import React, { Component } from "react";

class GitUserInformationDebug extends Component {
  componentDidMount() {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}

export default GitUserInformationDebug;
