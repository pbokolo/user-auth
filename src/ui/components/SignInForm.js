import React, { useState } from "react";

import TextInput from "./TextInput";
import FormSubmitBtn from "./FormSubmitBtn";

import { controller } from "../../controller/signinForm";

export default function SignInForm() {
  const [creds, setCreds] = useState(controller.initialCreds);
  const [type, setType] = useState("signin");

  const authMode = type === "signin" ? "Signup here" : "Back to signin";
  const changeHandler = (e) => {
    controller.handleChange(e, creds, setCreds);
  };

  const handleAuthModeSwitch = () => {
    switch (type) {
      case "signin":
        setType("signup");
        break;
      case "signup":
        setType("signin");
        break;
    }
  };
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => controller.handleSubmit(e, creds, type, setCreds)}
      >
        <fieldset className="fieldset">
          <TextInput
            type="email"
            id="email"
            label="Email"
            placeholder="Email: email@example.com"
            value={creds.email}
            required={true}
            changeHandler={changeHandler}
          />
        </fieldset>

        <fieldset className="fieldset">
          <TextInput
            type="password"
            id="password"
            label="Password"
            placeholder={"Password: secret"}
            value={creds.password}
            required={true}
            changeHandler={changeHandler}
          />
        </fieldset>

        {type === "signup" ? (
          <fieldset className="fieldset">
            <TextInput
              type="password"
              id="secondPwd"
              label="Retype password"
              placeholder={"Same as the previous one"}
              value={creds.secondPwd}
              required={true}
              changeHandler={changeHandler}
            />
          </fieldset>
        ) : (
          ""
        )}

        <div>
          <FormSubmitBtn value={type === "signin" ? "Sign in" : "Sign up"} />
        </div>
        <p className="signup__cta">
          {type === "signin" ? "Not yet in? " : "Already in? "}
          <span className="signup__cta-link" onClick={handleAuthModeSwitch}>
            {authMode}
          </span>
        </p>
      </form>
    </>
  );
}
