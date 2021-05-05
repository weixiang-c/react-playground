import React, { Component } from "react";

const ListLoader = (Component) => {
  return function ListLoaderComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    } else {
      return (
        <p style={{ textAlign: "center", fontSize: "30px" }}>
          Hold on, fetching data may take some time :)
        </p>
      );
    }
  };
};

export default ListLoader;
