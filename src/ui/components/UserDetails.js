import React, { useEffect, useState } from "react";
import { firebase } from "../../firebase";
import {
  Person,
  ContactPhone,
  ContactMail,
  LocationCity,
} from "@mui/icons-material";
import ProfilePicture from "./ProfilePicture";

import { controller } from "../../controller/signinForm";

export default function UserDetails() {
  const inits = { displayName: "Unset", email: "Unset", phoneNumber: "Unset" };
  const [user, setUser] = useState(null);
  const { displayName, email, phoneNumber } = user || inits;
  useEffect(() => {
    const currentUser = firebase.getUser();
    setUser(currentUser);
  }, [user]);
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
      <div
        className="user__details-details"
        onClick={() => controller.updateProfile()}
      >
        <p className="user__details-detail">
          <Person className="icon" />
          <span className="detail">{displayName}</span>
        </p>
        <p className="user__details-detail">
          <ContactPhone className="icon" />{" "}
          <span className="detail">{phoneNumber}</span>
        </p>
        <p className="user__details-detail">
          <ContactMail className="icon" />
          <span className="detail">{email}</span>
        </p>
        <p className="user__details-detail">
          <LocationCity className="icon" />
          <span className="detail">Address</span>
        </p>

        <div className="user__details-update">Update</div>
      </div>
    </div>
  );
}
