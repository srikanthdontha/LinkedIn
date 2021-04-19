import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-001-300x585.jpg" />
        <Avatar src={user.photoURL} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNum">2,500</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNum">2,800</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recents</p>
        {recentItem("reactjs")}
        {recentItem("python")}
        {recentItem("javascript")}
        {recentItem("html")}
        {recentItem("java")}
        {recentItem("computer science")}
      </div>
    </div>
  );
}

export default Sidebar;
