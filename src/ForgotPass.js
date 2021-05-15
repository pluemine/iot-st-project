import "./App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./components/Main.css";
import { TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

function ForgotPass() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  return (
    <div className="background">
      <div className="container home-block">
        <div className="home-card">
          <div className="text-title">Forgot Password</div>
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>
          <div className="space-text"></div>
          <div
            className="button"
            onClick={() =>
              history.push({ pathname: "/resetpassword", username: username })
            }
            style={{ cursor: "pointer" }}
          >
            <div className="button-text-white">Continue</div>
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

export default ForgotPass;
