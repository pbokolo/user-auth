import React from "react";
import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div className="page">
      <p className="text text--lost">
        Sorry! We couldn't find the ressource you're looking for
      </p>
      <Link to="/" className="btn btn--link btn--primary btn--lost">
        Go back home
      </Link>
    </div>
  );
}
