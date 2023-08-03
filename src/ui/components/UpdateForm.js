import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

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
    <div className="form form--edit">
      <form onSubmit={(e) => submitHandler(e, property, value)}>
        <FormTextInput
          type={propType}
          value={value}
          label={property}
          changeHandler={changeHandler}
        />
      </form>
      <button className="btn btn--reinit" onClick={() => reiniter(false)}>
        <ArrowBackOutlinedIcon fontSize="large" />
      </button>
    </div>
  );
}
