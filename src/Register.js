import "./App.css";
import { useHistory } from "react-router-dom";
import "./components/Main.css";
import { TextField, Checkbox } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

function Register() {
  const history = useHistory();
  return (
    <div className="background">
      <div className="container home-block">
        <div className="home-card">
          <div className="text-title">Register</div>
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
              <EmailIcon />
              <TextField
                label="Email"
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
              <AssignmentIndIcon />
              <TextField
                label="Firstname"
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
              <AssignmentIndIcon />
              <TextField
                label="Lastname"
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
          <div className="space-text">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Checkbox color="default" style={{marginLeft: "-8px"}} />
              <div className="text-option">I have read and agree to the Terms and Conditions</div>
            </div>
          </div>
          <div className="button" style={{ cursor: "pointer" }}>
            <div className="button-text-white">Register</div>
          </div>
          <div
            className="button-border"
            onClick={() => history.replace("/")}
            style={{ cursor: "pointer" }}
          >
            <div className="button-text">Back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
