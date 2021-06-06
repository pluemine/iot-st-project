import "./App.css";
import { useHistory } from "react-router-dom";
import "./components/Main.css";
import {
  TextField,
  Tabs,
  Tab,
  Select,
  MenuItem,
  LinearProgress,
  Switch,
  Button,
  Slider,
  IconButton,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
          {/*<div className="space-text">
            <div
              className="text-option"
              onClick={() => history.push("/forgotpassword")}
              style={{ cursor: "pointer" }}
            >
              Forgot Password
            </div>
            </div>*/}
          {/*<div
            className="button"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/dashboard")}
          >
            <div className="button-text-white">Login</div>
          </div>
          <div
            className="button-border"
            onClick={() => history.push("/register")}
            style={{ cursor: "pointer" }}
          >
            <div className="button-text">Register</div>
          </div>*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "32px",
            }}
          >
            <div className="button-circle-multi">
              <IconButton
                className="button-circle-multi-block"
                onClick={() => history.push("/register")}
              >
                <PersonAddIcon />
              </IconButton>
              <IconButton
                className="button-circle-multi-block"
                onClick={() => history.push("/forgotpassword")}
              >
                <NoEncryptionIcon />
              </IconButton>
            </div>
            <IconButton
              className="button-circle"
              style={
                true ? { background: "#53700d" } : { background: "#cccccc" }
              }
              disabled={false}
              onClick={() => history.push("/dashboard")}
            >
              <ArrowForwardIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
