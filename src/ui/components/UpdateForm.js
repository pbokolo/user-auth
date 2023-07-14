import React from "react";
import FormTextInput from "./FormTextInput";

export default function UpdateForm({ submitHandler, field }) {
  return (
    <form onSubmit={submitHandler}>
      <FormTextInput />
    </form>
  );
}
