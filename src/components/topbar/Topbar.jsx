import React from "react";
import "./Topbar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/1.png";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function Topbar({onButtonClick,onIncreaseFontSize,onDecreaseFontSize}) {


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <AddBoxOutlinedIcon onClick={onIncreaseFontSize}/>
          </div>
          <div className="topbarIconContainer">
          <IndeterminateCheckBoxOutlinedIcon onClick={onDecreaseFontSize}/>
          </div>
          <div className="topbarIconContainer">
            <DarkModeOutlinedIcon onClick={onButtonClick} />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
