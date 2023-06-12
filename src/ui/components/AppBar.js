import React from "react";
import Logo from "./Logo";
import ProfilePicture from "./ProfilePicture";

export default function AppBar() {
  return (
    <div className="appbar">
      <Logo />
      <ProfilePicture
        className={
          "user user__profile user__profile-picture user__profile-picture--small"
        }
      />
    </div>
  );
}
