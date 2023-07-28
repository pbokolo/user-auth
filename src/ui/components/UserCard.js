import React, { useState } from "react";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import dog from "../../assets/dog.jpg";
import { authController } from "../../controller/auth";

export default function UserComponent({ user }) {
  const [profilePictureUrl, setProfilePictureUrl] = useState(user.photoURL);
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    setProfilePictureUrl(URL.createObjectURL(file));
    authController.handleProfilePictureSubmit(file, setProfilePictureUrl);
  };

  return (
    <div className="card card--user">
      <div className="card--user__photo">
        <img
          src={profilePictureUrl || dog}
          alt="user"
          className="card--user__photo-picture"
        />

        <div className="card--user__photo-btn">
          <PhotoOutlinedIcon
            className="icon"
            sx={{
              fontSize: 30,
              color: "white",
              padding: ".5rem",
              borderRadius: "50%",
              backgroundColor: "#7b7b7bc1",
              cursor: "pointer",
            }}
          />
          <input
            className="btn btn--upload "
            type="file"
            onChange={handlePictureUpload}
          />
        </div>
      </div>
      <div className="card--user__identity">
        <ul>
          <li>{user.displayName || "To be defined"}</li>
          <li>{user.email || "To be defined"}</li>
          <li>{user.phoneNumber || "To be defined"}</li>
          <li>Address</li>
        </ul>
      </div>
      <div className="card--user__actions">
        <button
          className="btn btn--text"
          onClick={authController.handleSignout}
        >
          signout
        </button>
        <button
          className="btn btn--text btn--danger"
          onClick={authController.handleDeleteAccount}
        >
          delete
        </button>
      </div>
    </div>
  );
}
