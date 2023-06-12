import React from "react";
import { AppBar } from "../components";
import UserDetails from "../components/UserDetails";

export default function Profile() {
  return (
    <div className="page page__profile">
      <AppBar />
      <main>
        <UserDetails />
      </main>
    </div>
  );
}
