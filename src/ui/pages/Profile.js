import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FBContext } from "../../firebase";

import { AppBar } from "../components";
import UserDetails from "../components/UserDetails";

export default function Profile() {
  const navigate = useNavigate();
  const firebase = useContext(FBContext);

  useEffect(() => {
    if (!firebase.getUser()) {
      navigate("/auth", { replace: true });
    }
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
