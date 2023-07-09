import React from "react";

export default function PrimaryBtn({ text, clickHandler }) {
  return (
    <button className="btn btn--primary" onClick={clickHandler}>
      {text}
    </button>
  );
}
