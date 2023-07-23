import React from "react";
import loader from "../../assets/spinner.svg";

export default function Spinner() {
  return (
    <img className="spinner spinner__image" src={loader} alt="loading..." />
  );
}
