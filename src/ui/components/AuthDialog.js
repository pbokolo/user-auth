import React from "react";

export default function AuthDialog() {
  return (
    <div className="dialog__overlay">
      <dialog open className="dialog__dialog">
        <h1>Sign in</h1>
        <p>
          You must be out of your goddamn mind to try use this app without being
          authenticate
        </p>
      </dialog>
    </div>
  );
}
