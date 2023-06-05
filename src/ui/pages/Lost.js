import React from "react";
import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div className="page page__error">
      <p>Ooops!</p>
      <p>We can't found the ressource you're looking for </p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
