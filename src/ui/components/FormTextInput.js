import React from "react";

export default function FormTextInput({
  id,
  label,
  type,
  value,
  changeHandler,
}) {
  return (
    <fieldset className="inputset">
      <input
        className="inputset__input"
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={changeHandler}
        required
      />
      <label className="text__label inputset__label" htmlFor={id}>
        {label}
      </label>
      <span className="text__notif inputset__notif"></span>
    </fieldset>
  );
}
