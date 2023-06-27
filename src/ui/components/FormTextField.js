import React from "react";
import TextInput from "./TextInput";

export default function FormTextField({
  type,
  id,
  label,
  placeholder,
  value,
  required,
  changeHandler,
}) {
  return (
    <fieldset className="fieldset">
      <TextInput
        type={type}
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        required={required}
        changeHandler={changeHandler}
      />
    </fieldset>
  );
}
