import React from "react";
import dog from "../../assets/dog.jpg";

export default function UserComponent() {
  return (
    <div className="card card--user">
      <div className="card--user__photo">
        <img src={dog} alt="user" className="card--user__photo-picture" />
      </div>
      <div className="card--user__identity">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Tel</li>
          <li>Address</li>
        </ul>
      </div>
      <div className="card--user__actions">Actions</div>
    </div>
  );
}
