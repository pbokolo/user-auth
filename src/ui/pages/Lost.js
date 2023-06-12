import React from "react";
import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div className="page page__lost">
      <p>Ooops!</p>
      <p>We can't find the ressource you're looking for </p>
      <Link to="/" className="btn btn--primary btn--link">
        Go back home
      </Link>
    </div>
  );
}
