import React from "react";

const Dashboard = () => {
  return <h2>Dashboard Module</h2>;
};

export default {
  name: "Dashboard",
  routeProps: {
    path: "/",
    exact: true,
    component: Dashboard,
  },
};
