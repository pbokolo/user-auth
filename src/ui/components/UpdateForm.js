import React, { useState } from "react";
import FormTextInput from "./FormTextInput";

export default function UpdateForm({ submitHandler, property }) {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={(e) => submitHandler(e, property)}>
      <FormTextInput value={value} changeHandler={changeHandler} />
    </form>
  );
}
