import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import uhuru from "../../assets/uhuru-icon.svg";

export default function AuthCTA({ clickHandler }) {
  return (
    <div className="auth-cta__block">
      <img src={uhuru} alt="Freedom" className="uhuru" />
      <h1 className="heading heading--2">Unleash your freedom</h1>
      <PrimaryBtn text="sign in to continue" clickHandler={clickHandler} />
    </div>
  );
}
