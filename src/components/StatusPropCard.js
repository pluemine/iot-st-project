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

function StatusPropCard(props) {
  const { title, status, icon, mode, onChange, value } = props;

  let screen;
  if (mode === "switch") {
    screen = (
      <Switch
        checked={value}
        onChange={onChange}
        color={title != "Reset" ? "primary" : "secondary"}
      />
    );
  } else if (mode === "button") {
    screen = (
      <Button
        variant="outlined"
        color="secondary"
        style={{ fontSize: "12px" }}
        onClick={onChange}
      >
        Reset
      </Button>
    );
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
        {icon}
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
          <div className="text-status-status">
            {status != null ? "Status: " + status : undefined}
          </div>
        </div>
      </div>
      {screen}
    </div>
  );
}

export default StatusPropCard;
