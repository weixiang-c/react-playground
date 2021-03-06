import React from "react";

const Analytics = () => {
  return <h2>Analytics Module</h2>;
};

export default {
  name: "Analytics", // The name of the module
  routeProps: {
    // This gets passed straight to react-router
    path: "/analytics", // Where the module lives in the nav hierarchy
    component: Analytics, // The actual component itself
  },
};
