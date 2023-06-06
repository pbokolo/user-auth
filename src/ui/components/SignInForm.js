import React, { useState } from "react";

import TextInput from "./TextInput";
import FormSubmitBtn from "./FormSubmitBtn";

import { controller } from "../../controller/signinForm";

export default function SignInForm() {
  const [creds, setCreds] = useState(controller.initialCreds);
  const changeHandler = (e) => {
    controller.handleChange(e, creds, setCreds);
  };
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => controller.handleSubmit(e, creds, setCreds)}
      >
        <fieldset className="fieldset">
          <TextInput
            type="email"
            id="email"
            label="Email"
            placeholder="example@example.com"
            value={creds.email}
            changeHandler={changeHandler}
          />
        </fieldset>

        <fieldset className="fieldset">
          <TextInput
            type="password"
            id="password"
            label="Password"
            value={creds.password}
            changeHandler={changeHandler}
          />
        </fieldset>

        <FormSubmitBtn value="Sign in" />
        <p>
          Not yet in? <span style={{ color: "blue" }}>Signup here</span>
        </p>
      </form>
    </>
  );
}
