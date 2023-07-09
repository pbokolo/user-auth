import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { authController } from "../../controller/auth";
import CloseIcon from "@mui/icons-material/Close";

export default function AuthDialog({ show, closeHandler }) {
  const { TYPE_SIGN_IN } = authController;
  const [authType, setAuthType] = useState(TYPE_SIGN_IN);
  const title = authType === TYPE_SIGN_IN ? "Sign in" : "Create new account";

  const authTypeChangeHandler = (errorsSetter) => {
    authController.handleAuthTypeChange(authType, setAuthType, errorsSetter);
  };
  return (
    <div id="overlay" className="dialog__overlay" onClick={closeHandler}>
      <dialog open={show} className="dialog__dialog">
        <h1 className="heading heading--2">{title}</h1>
        <div className="dialog__btn-close btn btn--close" id="close">
          <CloseIcon fontSize="large" id="close__icon" />
        </div>
        <div className="content">
          <AuthForm type={authType} authTypeChange={authTypeChangeHandler} />
        </div>
      </dialog>
    </div>
  );
}
