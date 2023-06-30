import React from "react";
import { firebase } from "../../firebase";
import {
  Person,
  ContactPhone,
  ContactMail,
  LocationCity,
} from "@mui/icons-material";
import ProfilePicture from "./ProfilePicture";

export default function UserDetails() {
  const user = firebase.getUser();

  return (
    <div className="user__details">
      <div className="user__details-picture">
        <ProfilePicture
          className={
            "user user__profile user__profile-picture user__profile-picture--regular"
          }
          url={user?.photoURL}
        />
      </div>
      <div className="user__details-details">
        <p className="user__details-detail">
          <Person className="icon" />
          <span className="detail">{user?.displayName || "To be defined"}</span>
        </p>
        <p className="user__details-detail">
          <ContactPhone className="icon" />{" "}
          <span className="detail">{user?.phoneNumber || "To be defined"}</span>
        </p>
        <p className="user__details-detail">
          <ContactMail className="icon" />
          <span className="detail">{user?.email || "To be defined"}</span>
        </p>
        <p className="user__details-detail">
          <LocationCity className="icon" />
          <span className="detail">Address</span>
        </p>
      </div>
    </div>
  );
}
