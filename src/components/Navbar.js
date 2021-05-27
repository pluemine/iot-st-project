import "../App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import SettingsIcon from "@material-ui/icons/Settings";
import ListIcon from "@material-ui/icons/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import AssessmentIcon from "@material-ui/icons/Assessment";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

function Navbar() {
  const history = useHistory();
  return (
    <div className="container nav-bar">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div className="nav-logo-block">
          <img src="/logo.png" className="nav-logo" />
        </div>
      </div>
      <div className="nav-button-block">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className="nav-button"
              onClick={() => history.replace("/dashboard")}
            >
              <DashboardIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className="nav-button"
            >
              <PermIdentityIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className="nav-button"
              onClick={() => history.replace("/")}
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
