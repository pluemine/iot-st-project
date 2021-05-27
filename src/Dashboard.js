import "./App.css";
import { useHistory } from "react-router-dom";
import "./components/Main.css";
import { IconButton } from "@material-ui/core";
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
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

import Navbar from "./components/Navbar";
import DeviceListCard from "./components/DeviceListCard";

function Dashboard() {
  const history = useHistory();
  return (
    <div className="background">
      <Navbar />
      <div className="container page-block">
        <div className="data-card">
          <div className="row">
            <div className="col-sm-6">
              <div className="text-title">Map</div>
            </div>
            <div className="col-sm-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="text-title">Devices</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "32px",
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <DeleteIcon style={{ width: "20px", height: "20px" }} />
                  </IconButton>
                  <IconButton
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "32px",
                      width: "32px",
                      height: "32px",
                      marginLeft: "10px",
                    }}
                  >
                    <PlaylistAddIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </IconButton>
                </div>
              </div>
              {[
                { title: "Daikin AC Split", status: "Auto", link: "/device" },
                { title: "VRV III System", status: "Auto", link: "/device" },
              ].map((device, index) => {
                return (
                  <DeviceListCard
                    key={"device" + index}
                    title={device.title}
                    status={device.status}
                    icon={<ListIcon />}
                    link={device.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
