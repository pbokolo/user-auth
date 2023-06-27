import React, { useState } from "react";

import FormSubmitBtn from "./FormSubmitBtn";

import { controller } from "../../controller/signinForm";
import FormTextField from "./FormTextField";

export default function SignInForm() {
  const [creds, setCreds] = useState(controller.initialCreds);

  const authMode = creds.todo === "signin" ? "Signup here" : "Back to signin";
  const changeHandler = (e) => {
    controller.handleChange(e, creds, setCreds);
  };

  const handleAuthModeSwitch = () => {
    switch (creds.todo) {
      case "signin":
        setCreds({ ...creds, todo: "signup" });

        break;
      case "signup":
        setCreds({ ...creds, todo: "signin" });

        break;
    }
  };
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => controller.handleSubmit(e, creds, setCreds)}
      >
        <FormTextField
          type="email"
          id="email"
          label="Email"
          placeholder="Email: email@example.com"
          value={creds.email}
          required={true}
          changeHandler={changeHandler}
        />

        <FormTextField
          type="password"
          id="password"
          label="Password"
          placeholder={"Password: secret"}
          value={creds.password}
          required={true}
          changeHandler={changeHandler}
        />

        {creds.todo === "signup" ? (
          <FormTextField
            type="password"
            id="secondPwd"
            label="Retype password"
            placeholder={"Retype password: secret"}
            value={creds.secondPwd}
            required={true}
            changeHandler={changeHandler}
          />
        ) : (
          ""
        )}

        <div>
          <FormSubmitBtn
            value={creds.todo === "signin" ? "Sign in" : "Sign up"}
          />
        </div>
        <p className="signup__cta">
          {creds.todo === "signin" ? "Not yet in? " : "Already in? "}
          <span className="signup__cta-link" onClick={handleAuthModeSwitch}>
            {authMode}
          </span>
        </p>
      </form>
    </>
  );
}
