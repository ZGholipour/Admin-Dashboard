import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topBarLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topBarRight">
          <div className="topBarIconContainer">
            <NotificationsIcon />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <img 
         className="topBarAvatar" src="images/npm.png" alt="" />
        </div>
      </div>
    </div>
  );
}
