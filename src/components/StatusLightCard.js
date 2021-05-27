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
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import SettingsIcon from "@material-ui/icons/Settings";
import ListIcon from "@material-ui/icons/List";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import AssessmentIcon from "@material-ui/icons/Assessment";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

function StatusLightCard(props) {
  const { title, status } = props;
  let screen;
  if (status === "on") {
    screen = <div className="status-light-fan"></div>;
  } else {
    screen = <div className="status-light-auto"></div>;
  }
  return (
    <div className="status-block">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div className="status-box">{screen}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: "8px",
          }}
        >
          <div className="text-status-title">{title}</div>
          <div className="text-status-status">Status: {status}</div>
        </div>
      </div>
    </div>
  );
}

export default StatusLightCard;
