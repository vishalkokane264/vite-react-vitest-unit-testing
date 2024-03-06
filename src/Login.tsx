import { useEffect, useState } from "react";
import Card from "./Components/Card";

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userObject, setUserObject] = useState<any>({
    user: "",
    pass: "",
  });
  const [loggedStatus, setLogedStatus] = useState<boolean>(false);
  const displayRecords = (event: any) => {
    event?.preventDefault();
    setUserObject({ user: userName, pass: password });
    setLogedStatus(!loggedStatus);
    setUserName("");
    setPassword("");
  };
  return (
    <div data-testid="test-login">
      <div data-testid="test-card">
        <Card title={`This is ${userObject.user}`} />
      </div>

      <div className="login-wrapper" data-testid="test-login-form">
        <div className="header">Login page</div>
        <form>
          <div className="fields-wrapper">
            <label className="label-text">UserName</label>
            <input
              data-testid="input-username"
              className="input-text"
              type="text"
              name="username"
              value={userName}
              onChange={(event) => setUserName(event?.target?.value || "")}
            />
          </div>
          <div className="fields-wrapper">
            <label className="label-text">Password</label>
            <input
              data-testid="input-username"
              className="input-text"
              type="text"
              name="password"
              value={password}
              onChange={(event) => setPassword(event?.target?.value || "")}
            />
          </div>
          <button onClick={(event) => displayRecords(event)}>Submit</button>
        </form>
      </div>
      {loggedStatus === true ? (
        <div data-testid="login-success">
          <div data-testid="test-card-condition">
            <Card title={`This is ${userObject.user}`} />
          </div>

          <button onClick={displayRecords}>Logout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
