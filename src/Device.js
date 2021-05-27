import "./App.css";
import { useState } from "react";
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
import CheckIcon from "@material-ui/icons/Check";
import RefreshIcon from "@material-ui/icons/Refresh";

import StatusLightCard from "./components/StatusLightCard";
import StatusPropCard from "./components/StatusPropCard";
import StatusSliderCard from "./components/StatusSliderCard";
import Navbar from "./components/Navbar";

function Device() {
  const history = useHistory();
  const [select, setSelect] = useState("historical");
  const [control, setControl] = useState(true);
  const [reset, setReset] = useState(false);
  const [step, setStep] = useState(0);
  const [temp, setTemp] = useState(0);

  const BorderLinearProgress = withStyles((theme) => ({
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#53700d",
    },
  }))(LinearProgress);

  const handleChange_select = (event, newValue) => {
    setSelect(newValue);
  };

  const handleChange_control = (event, newValue) => {
    setControl(newValue);
  };

  const handleChange_step = (event, newValue) => {
    setStep(newValue);
  };

  const handleChange_temp = (event, newValue) => {
    setTemp(newValue);
  };

  const handleChange_reset = (event, newValue) => {
    setReset(newValue);
  };

  const handleChange_refresh = (event, newValue) => {
    setStep(0);
    setTemp(0);
  };

  function tempClass() {
    if (temp >= 80) {
      return "text-status-temp-3";
    } else if (temp >= 40) {
      return "text-status-temp-2";
    } else {
      return "text-status-temp-1";
    }
  }

  function tempColor() {
    if (temp >= 80) {
      return "#dc143c";
    } else if (temp >= 40) {
      return "#c27a37";
    } else {
      return "#53700d";
    }
  }

  let screen;
  if (select === "realtime") {
    screen = (
      <div className="data-card">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-title">Status</div>
            <StatusLightCard title="Control" status="on" />
            <StatusLightCard title="Unstable" status="error" />
          </div>
          <div className="col-sm-6">
            <div className="text-title">Monitor</div>
            <div className="row">
              <div className="col-sm-6">
                <div className="status-show-block">
                  <TrendingUpIcon style={{ color: "#aaaaaa", width: "24px" }} />
                  <div className="text-status-step">0.6</div>
                  <div className="text-status-status">Step</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="status-show-block">
                  <SquareFootIcon style={{ color: "#aaaaaa", width: "24px" }} />
                  <div className="text-status-ref">30°c</div>
                  <div className="text-status-status">Reference</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="status-show-block">
                  <BorderLinearProgress
                    variant="determinate"
                    value={26}
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                      marginBottom: "8px",
                    }}
                  />
                  <div className="text-status-out">26°c</div>
                  <div className="text-status-status">Temperature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (select === "control") {
    screen = (
      <div className="data-card">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-title">Mode</div>
            <StatusPropCard
              title="Control"
              status={control ? "On" : "Off"}
              icon={
                <AssessmentIcon style={{ width: "30px", height: "30px" }} />
              }
              mode="switch"
              onChange={handleChange_control}
              value={control}
            />
            <StatusPropCard
              title="Reset"
              icon={
                <RotateLeftIcon style={{ width: "30px", height: "30px" }} />
              }
              mode="switch"
              onChange={handleChange_reset}
              value={reset}
            />
          </div>
          <div className="col-sm-6">
            <div className="text-title">Manual</div>
            <div className="row">
              <div className="col-sm-12">
                <StatusSliderCard
                  title="Set Step"
                  onChange={handleChange_step}
                  value={step}
                  step={0.05}
                  min={0}
                  max={1}
                  clsName="text-status-step"
                  color="#c27a37"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <StatusSliderCard
                  title="Set Temperature"
                  onChange={handleChange_temp}
                  value={temp}
                  step={1}
                  min={0}
                  max={100}
                  clsName={tempClass()}
                  color={tempColor()}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "12px",
                marginBottom: "4px",
              }}
            >
              <IconButton
                className="button-circle"
                onClick={handleChange_refresh}
              >
                <RefreshIcon />
              </IconButton>
              <IconButton
                className="button-circle"
                style={
                  step != 0 && temp != 0
                    ? { background: "#53700d" }
                    : { background: "#cccccc" }
                }
                disabled={step === 0 || temp === 0}
              >
                <CheckIcon style={{ color: "#ffffff" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="background">
      <Navbar />
      <div className="container page-block">
        <div className="tab-card">
          <Tabs
            value={select}
            onChange={handleChange_select}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs"
            style={{ height: "fit-content" }}
          >
            <Tab
              icon={<PersonalVideoIcon />}
              label="Historical"
              value="historical"
              style={{ fontSize: "12px" }}
            />
            <Tab
              icon={<SettingsIcon />}
              label="Realtime"
              value="realtime"
              style={{ fontSize: "12px" }}
            />
            <Tab
              icon={<ListIcon />}
              label="Control"
              value="control"
              style={{ fontSize: "12px" }}
            />
          </Tabs>
        </div>
        {screen}
      </div>
    </div>
  );
}

export default Device;
