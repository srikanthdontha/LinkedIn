import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessIcon from "@material-ui/icons/Business";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar={true} title="SignOut" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
