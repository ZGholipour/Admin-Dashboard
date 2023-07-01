import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sidBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sidBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <LineStyleIcon className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sidBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <PermIdentityIcon className="sideBarIcon" />
              Users
            </li>
            <li className="sideBarListItem">
              <PermIdentityIcon className="sideBarIcon" />
              New User
            </li>
            <li className="sideBarListItem">
              <StorefrontIcon className="sideBarIcon" /> Products
            </li>
            <li className="sideBarListItem">
              <AttachMoneyIcon className="sideBarIcon" />
              Transaction
            </li>
            <li className="sideBarListItem">
              <BarChartIcon className="sideBarIcon" /> Reports
            </li>
          </ul>
        </div>
      </div>
      <div className="sidBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sidBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <MailOutlineIcon className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeedIcon className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutlineIcon className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="sidBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sidBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <MessageOutlinedIcon className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <WorkOutlineIcon className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <ReportIcon className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}