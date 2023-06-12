import { placeholder } from "@babel/types";
import React from "react";

export default function TextInput({
  type,
  id,
  label,
  value,
  placeholder,
  required,
  changeHandler,
}) {
  return (
    <>
      <input
        className="textinput__text"
        placeholder={placeholder || ""}
        type={type}
        id={id}
        value={value}
        required={required}
        onChange={changeHandler}
      />
      <label className="textinput__label" htmlFor={id}>
        {label}
      </label>
    </>
  );
}
