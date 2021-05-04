import React from "react";

//import MapContainer from "./MapContainer";

const GMap = () => {
  return (
    <React.Fragment>
      <div>Map Module</div>
      {/* <MapContainer /> */}
    </React.Fragment>
  );
};

export default {
  name: "GMap", // The name of the module
  routeProps: {
    // This gets passed straight to react-router
    path: "/map", // Where the module lives in the nav hierarchy
    component: GMap, // The actual component itself
  },
};
