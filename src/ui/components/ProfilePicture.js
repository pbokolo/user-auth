import React from "react";
import dog from "../../assets/dog.jpg";

export default function ProfilePicture() {
  return (
    <img src={dog} className="user__profile-picture" alt="user profile"></img>
  );
}
