import React from "react";
import dog from "../../assets/dog.jpg";

export default function ProfilePicture({ className, url }) {
  const photoUrl = url || dog;
  return (
    <div className={className}>
      <img src={photoUrl} className={className} alt="user profile"></img>
      <p className="user user__profile user__profile-edit">Edit</p>
    </div>
  );
}
