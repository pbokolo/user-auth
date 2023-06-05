import { placeholder } from "@babel/types";
import React from "react";

export default function TextInput({
  type,
  id,
  label,
  value,
  placeholder,
  changeHandler,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder || ""}
        type={type}
        id={id}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}
