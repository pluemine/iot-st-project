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
import {
  makeStyles,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
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

function StatusSliderCard(props) {
  const { title, onChange, value, step, min, max, clsName, color } = props;

  const MySlider = createMuiTheme({
    overrides: {
      MuiSlider: {
        root: {
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
          marginTop: -8,
          marginLeft: -12,
          "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
          },
        },
        active: {},
        valueLabel: {
          left: "calc(-50% + 4px)",
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      },
    },
  });

  return (
    <div className="status-show-block">
      <ThemeProvider theme={MySlider}>
        <Slider
          aria-labelledby="discrete-slider-small-steps"
          step={step}
          min={min}
          max={max}
          valueLabelDisplay="auto"
          onChange={onChange}
          value={value}
          style={{ color: color }}
        />
      </ThemeProvider>
      <div className={clsName}>{value}</div>
      <div className="text-status-status">{title}</div>
    </div>
  );
}

export default StatusSliderCard;
