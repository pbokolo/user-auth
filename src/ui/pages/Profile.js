import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FBContext } from "../../firebase";

import { AppBar } from "../components";
import UserDetails from "../components/UserDetails";

export default function Profile() {
  const navigate = useNavigate();
  const firebase = useContext(FBContext);

  useEffect(() => {
    firebase.getAuth().onAuthStateChanged((user) => {
      if (!user) navigate("/auth");
    });
  }, [null]);

  return (
    <div className="page page__profile">
      <AppBar />
      <main>
        <UserDetails />
      </main>
    </div>
  );
}
