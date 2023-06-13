import React, { useContext } from "react";

import { FBContext } from "../../firebase";

import { AppBar } from "../components";
import UserDetails from "../components/UserDetails";

export default function Profile() {
  const firebase = useContext(FBContext);

  return (
    <div className="page page__profile">
      <AppBar />
      <main>
        <UserDetails />
      </main>
    </div>
  );
}
