import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import { authController } from "../../controller/auth";

export default function AuthForm({ type, authTypeChange }) {
  //Properties
  const { TYPE_SIGN_IN, TYPE_SIGN_UP, initData, errors } = authController;

  // State
  const [data, setData] = useState(initData);
  const [dataErrors, setDataErrors] = useState(errors);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    authController.handleFormSubmit(
      e,
      { ...data, type },
      setData,
      setDataErrors
    );
  };

  return (
    <form className="auth" onSubmit={submit}>
      <FormTextInput
        id={"email"}
        label="Email"
        type="email"
        value={data.email}
        error={dataErrors.email}
        changeHandler={changeHandler}
      />
      <FormTextInput
        id={"password"}
        label="Password"
        type="password"
        value={data.password}
        error={dataErrors.password}
        changeHandler={changeHandler}
      />

      {type === TYPE_SIGN_UP ? (
        <FormTextInput
          id={"secondPassword"}
          label="Retype password"
          type="password"
          value={data.secondPassword}
          error={dataErrors.secondPassword}
          changeHandler={changeHandler}
        />
      ) : (
        ""
      )}

      <input
        type="submit"
        value={type === TYPE_SIGN_IN ? "Sign in" : "create account"}
        className="btn btn--primary btn--submit"
      />

      <div className="auth__signup-cta">
        <p className="text">
          {type === TYPE_SIGN_IN
            ? "Don't have an account?"
            : "Have an account?"}{" "}
          <span className="text--cta-signup" onClick={authTypeChange}>
            {type === TYPE_SIGN_IN ? "Signup" : "Signin"}{" "}
          </span>
        </p>
      </div>
    </form>
  );
}
