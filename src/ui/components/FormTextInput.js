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
      <label className="text__label inputset__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputset__input"
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={changeHandler}
      />
      <span className="text__notif inputset__notif">Error</span>
    </fieldset>
  );
}
