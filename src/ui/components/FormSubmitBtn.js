import React from "react";

export default function FormSubmitBtn({ value }) {
  return (
    <input
      className="btn btn--submit btn--primary"
      type="submit"
      value={value}
    />
  );
}
