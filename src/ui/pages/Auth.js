import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FBContext } from "../../firebase";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { SignInForm } from "../components";

export default function Auth() {
  const firebase = useContext(FBContext);
  const navigate = useNavigate();

  useEffect(() => {
    firebase.getAuth().onAuthStateChanged((user) => {
      if (user) navigate("/");
    });
  }, [null]);
  return (
    <div className="page page__auth">
      <h1>
        {<LockOutlinedIcon className="icon icon--big" fontSize="big" /> || (
          <LockOpenOutlinedIcon className="icon icon--big" fontSize="big" />
        )}
      </h1>
      <SignInForm />
    </div>
  );
}
