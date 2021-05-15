import "./App.css";
import { useHistory, useLocation } from "react-router-dom";
import "./components/Main.css";
import { TextField } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";

function ResetPass() {
  const history = useHistory();
  const location = useLocation();
  console.log(location.username);
  return (
    <div className="background">
      <div className="container home-block">
        <div className="home-card">
          <div className="text-title">Reset Password</div>
          <div className="text-subtitle">
            {location.username != "" && location.username != undefined
              ? "Welcome, " + location.username
              : undefined}
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
          <div className="textfield">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <EnhancedEncryptionIcon />
              <TextField
                label="Confirm Password"
                type="password"
                className="textfield"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </div>
          <div className="space-text"></div>
          <div
            className="button"
            onClick={() => history.replace("/")}
            style={{ cursor: "pointer" }}
          >
            <div className="button-text-white">Reset Password</div>
          </div>
          <div
            className="button-border"
            onClick={() => history.replace("/forgotpassword")}
            style={{ cursor: "pointer" }}
          >
            <div className="button-text">Back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
