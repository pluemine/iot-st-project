import "../App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";
import { IconButton } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function DeviceListCard(props) {
  const { title, status, icon, link } = props;
  const history = useHistory();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div
          className="status-block"
          onClick={() => history.push(link)}
          style={{ cursor: "pointer" }}
        >
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

          <IconButton
            style={{
              backgroundColor: "#eeeeee",
              borderRadius: "32px",
              width: "32px",
              height: "32px",
            }}
          >
            <ArrowForwardIosIcon style={{ width: "16px", height: "16px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default DeviceListCard;
