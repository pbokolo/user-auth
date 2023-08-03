import React, { useState } from "react";
import FormTextInput from "./FormTextInput";

export default function UpdateForm({
  property,
  propType,
  reiniter,
  submitHandler,
}) {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e, property)}>
        <FormTextInput
          type={propType}
          value={value}
          label={property}
          changeHandler={changeHandler}
        />
      </form>
      <button onClick={() => reiniter(false)}>Reinit</button>
    </>
  );
}
