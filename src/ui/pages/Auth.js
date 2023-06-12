import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { SignInForm } from "../components";

export default function Auth() {
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
