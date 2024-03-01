import { useState } from "react";

export const Button = ({ children }) => {
  const [clickState, updateState] = useState<boolean>(false);
  return (
    <button onClick={() => updateState(!clickState)} disabled={clickState}>
      {children}
    </button>
  );
};
export default Button;
