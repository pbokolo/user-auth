import React from "react";
import ProfilePicture from "./ProfilePicture";

export default function UserDetails() {
  return (
    <div className="user__details">
      <div className="user__details-picture">
        <ProfilePicture
          className={
            "user user__profile user__profile-picture user__profile-picture--regular"
          }
        />
      </div>
      <div className="user__details-details">Details</div>
    </div>
  );
}
