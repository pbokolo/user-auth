import React, { useState } from "react";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import dog from "../../assets/dog.jpg";
import { authController } from "../../controller/auth";
import UpdateForm from "./UpdateForm";

export default function UserComponent({ user }) {
  const [profilePictureUrl, setProfilePictureUrl] = useState(user.photoURL);
  const [usrnameEdit, setUsernameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    authController.handleProfilePictureSubmit(file, setProfilePictureUrl);
  };

  const handleClickIdentity = (e) => {
    switch (e.target.id) {
      case "username":
        setUsernameEdit(true);
        break;
      case "email":
        setEmailEdit(true);
        break;
      case "phone":
        setPhoneEdit(true);
        break;
    }
  };

  const updateSubmitHandler = (e) => {
    e.preventDefault();
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
      <div className="card--user__identity" onClick={handleClickIdentity}>
        {usrnameEdit ? (
          <UpdateForm submitHandler={updateSubmitHandler} />
        ) : (
          <p id="username">{user.displayName || "To be defined"}</p>
        )}
        {emailEdit ? (
          <UpdateForm submitHandler={updateSubmitHandler} />
        ) : (
          <p id="email">{user.email || "To be defined"}</p>
        )}
        {phoneEdit ? (
          <UpdateForm submitHandler={updateSubmitHandler} />
        ) : (
          <p id="phone">{user.phoneNumber || "To be defined"}</p>
        )}
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
