import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { authController } from "../../controller/auth";

export default function AuthDialog({ show }) {
  const { TYPE_SIGN_IN } = authController;
  const [authType, setAuthType] = useState(TYPE_SIGN_IN);
  const title = authType === TYPE_SIGN_IN ? "Sign in" : "Create new account";

  const authTypeChangeHandler = (errorsSetter) => {
    authController.handleAuthTypeChange(authType, setAuthType, errorsSetter);
  };
  return (
    <div className="dialog__overlay">
      <dialog open={show} className="dialog__dialog">
        <h1 className="heading heading--2">{title}</h1>
        <div className="content">
          <AuthForm type={authType} authTypeChange={authTypeChangeHandler} />
        </div>
      </dialog>
    </div>
  );
}
