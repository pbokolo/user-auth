import React, { useState } from "react";
import dog from "../../assets/dog.jpg";
import { authController } from "../../controller/auth";

export default function UserComponent({ user }) {
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    // setProfilePictureUrl(URL.createObjectURL(file));
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
        <input
          className="card--user__photo-btn"
          type="file"
          onChange={handlePictureUpload}
        />
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
