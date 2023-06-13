import React from "react";
import {
  Person,
  ContactPhone,
  ContactMail,
  LocationCity,
} from "@mui/icons-material";
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
      <div className="user__details-details">
        <p className="user__details-detail">
          <Person className="icon" />
          <span className="detail">Name</span>
        </p>
        <p className="user__details-detail">
          <ContactPhone className="icon" />{" "}
          <span className="detail">Phone</span>
        </p>
        <p className="user__details-detail">
          <ContactMail className="icon" />
          <span className="detail">Email</span>
        </p>
        <p className="user__details-detail">
          <LocationCity className="icon" />
          <span className="detail">Address</span>
        </p>
      </div>
    </div>
  );
}
