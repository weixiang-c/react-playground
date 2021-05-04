import React from "react";

const Dashboard = () => {
  return <div>Dashboard Module</div>;
};

export default {
  name: "Dashboard",
  routeProps: {
    path: "/",
    exact: true,
    component: Dashboard,
  },
};
