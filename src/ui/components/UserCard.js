import React from "react";
import dog from "../../assets/dog.jpg";

export default function UserComponent({ user }) {
  return (
    <div className="card card--user">
      <div className="card--user__photo">
        <img src={dog} alt="user" className="card--user__photo-picture" />
      </div>
      <div className="card--user__identity">
        <ul>
          <li>{user.displayName || "To be defined"}</li>
          <li>{user.email || "To be defined"}</li>
          <li>{user.phoneNumber || "To be defined"}</li>
          <li>Address</li>
        </ul>
      </div>
      <div className="card--user__actions">Actions</div>
    </div>
  );
}
