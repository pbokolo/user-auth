import { placeholder } from "@babel/types";
import React from "react";

export default function TextInput({
  type,
  id,
  label,
  value,

  changeHandler,
}) {
  return (
    <>
      <input
        className="textinput__text"
        placeholder={label || ""}
        type={type}
        id={id}
        value={value}
        onChange={changeHandler}
      />
      <label className="textinput__label" htmlFor={id}>
        {label}
      </label>
    </>
  );
}
