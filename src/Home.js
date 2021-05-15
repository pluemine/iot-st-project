import "./App.css";
import { useHistory } from "react-router-dom";
import "./components/Main.css";
import { TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

function Home() {
  const history = useHistory();
  return (
    <div className="background">
      <div className="container home-block">
        <div className="home-card">
          <div className="text-title">Welcome</div>
          <div className="textfield">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <AccountCircle />
              <TextField
                label="Username"
                className="textfield"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </div>
          <div className="textfield">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <LockIcon />
              <TextField
                label="Password"
                type="password"
                className="textfield"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </div>
          <div className="space-text">
            <div
              className="text-option"
              onClick={() => history.push("/forgotpassword")}
              style={{ cursor: "pointer" }}
            >
              Forgot Password
            </div>
          </div>
          <div className="button" style={{ cursor: "pointer" }}>
            <div className="button-text-white">Login</div>
          </div>
          <div
            className="button-border"
            onClick={() => history.push("/register")}
            style={{ cursor: "pointer" }}
          >
            <div className="button-text">Register</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
