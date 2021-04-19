import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon">{user?.email[0]}</Avatar>
      )}
      <div className="headerOption_title">{title}</div>
    </div>
  );
}

export default HeaderOption;
