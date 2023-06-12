import React from "react";
import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";

export default function AppBar() {
  return (
    <div className="appbar">
      <Logo />
      <ProfilePicture />
    </div>
  );
}
