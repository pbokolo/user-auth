import React, { useState } from "react";
import FormTextInput from "./FormTextInput";

const initData = { email: "", password: "", secondPassword: "" };
export default function AuthForm() {
  const [data, setData] = useState(initData);
  const [authType, setAuthType] = useState("signin");

  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const authTypeChangeHandler = () => {
    let newAuthType = "";
    switch (authType) {
      case "signin":
        newAuthType = "signup";

        break;
      case "signup":
        newAuthType = "signin";
        break;
    }

    setAuthType(newAuthType);
  };
  return (
    <form className="auth">
      <FormTextInput
        id={"email"}
        label="Email"
        type="email"
        value={data.email}
        changeHandler={changeHandler}
      />
      <FormTextInput
        id={"password"}
        label="Password"
        type="password"
        value={data.password}
        changeHandler={changeHandler}
      />

      {authType === "signup" ? (
        <FormTextInput
          id={"secondPassword"}
          label="Retype password"
          type="password"
          value={data.secondPassword}
          changeHandler={changeHandler}
        />
      ) : (
        ""
      )}

      <input
        type="submit"
        value={"Sign in"}
        className="btn btn--primary btn--submit"
      />

      <div className="auth__signup-cta">
        <p className="text">
          {authType === "signin"
            ? "Don't have an account?"
            : "Have an account?"}{" "}
          <span className="text--cta-signup" onClick={authTypeChangeHandler}>
            {authType === "signin" ? "Signup" : "Signin"}{" "}
          </span>
        </p>
      </div>
    </form>
  );
}
