import React, { useState } from "react";
import FormTextInput from "./FormTextInput";

const initData = { email: "", password: "", secondPassword: "" };
export default function AuthForm() {
  const [data, setData] = useState(initData);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
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
      <input
        type="submit"
        value={"Sign in"}
        className="btn btn--primary btn--submit"
      />

      <div className="auth__signup-cta">
        <p className="text">
          Don't have an account?{" "}
          <span className="text--cta-signup">Sign up</span>
        </p>
      </div>
    </form>
  );
}
