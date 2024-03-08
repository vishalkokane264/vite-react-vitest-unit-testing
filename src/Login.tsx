import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { DisplayRecords } from "./Components/DisplayRecords";

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
    if (userName && password) {
      setUserObject({ user: userName, pass: password });
      setLogedStatus(!loggedStatus);
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div data-testid="test-login">
      <div className="login-wrapper" data-testid="test-login-form">
        <div className="header">Login page</div>
        <form>
          <div className="fields-wrapper">
            <label className="label-text">User name</label>
            <input
              data-testid="input-username"
              className="input-text"
              type="text"
              name="username"
              value={userName}
              required
              onChange={(event) => setUserName(event?.target?.value || "")}
            />
          </div>
          <div className="fields-wrapper">
            <label className="label-text">Password</label>
            <input
              data-testid="input-username"
              className="input-text"
              type="password"
              required
              name="password"
              value={password}
              onChange={(event) => setPassword(event?.target?.value || "")}
            />
          </div>
          <button
            disabled={!userName || !password}
            onClick={(event) => displayRecords(event)}
          >
            Submit
          </button>
        </form>
      </div>
      {loggedStatus === true ? (
        <div data-testid="login-success">
          <div data-testid="test-card-condition">
            <Card title={`This is ${userObject.user}`} />
            <DisplayRecords />
          </div>

          <button onClick={displayRecords}>Logout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
