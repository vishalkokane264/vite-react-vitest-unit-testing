import React, { memo } from "react";
import Button from "./Components/Button";
import Login from "./Login";

export const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default memo(App);
