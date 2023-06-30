import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FBContext } from "../../firebase";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { SignInForm } from "../components";

export default function Auth() {
  const firebase = useContext(FBContext);
  const navigate = useNavigate();
  const [icon, setIcon] = useState(<LockOutlinedIcon fontSize="big" />);

  useEffect(() => {
    firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setIcon(<LockOpenOutlinedIcon fontSize="big" />);
        setTimeout(() => navigate("/"), 1000);
      }
    });
  }, [null]);
  return (
    <div className="page page__auth">
      <h1>{icon}</h1>
      <SignInForm />
    </div>
  );
}
