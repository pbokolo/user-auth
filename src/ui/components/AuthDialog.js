import React from "react";
import AuthForm from "./AuthForm";

export default function AuthDialog({ show }) {
  return (
    <div className="dialog__overlay">
      <dialog open={show} className="dialog__dialog">
        <h1 className="heading heading--2">Sign in</h1>
        <div className="content">
          <AuthForm />
        </div>
      </dialog>
    </div>
  );
}
