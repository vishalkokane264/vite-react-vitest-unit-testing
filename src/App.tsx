import React, { memo } from "react";
import Button from "./Components/Button";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
};

export default memo(App);
