import React, { memo } from "react";
import Button from "./Components/Button";
import Login from "./Login";

export const App = () => {
  console.log("i render");
  return (
    <div>
      <Login />
    </div>
  );
};

export default memo(App);
