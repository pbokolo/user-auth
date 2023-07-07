import React, { useState } from "react";

import AuthDialog from "../components/AuthDialog";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showAuthDialog, setAuthDialog] = useState(!user);

  return (
    <div className="page">
      {user ? "Welcome home" : <AuthDialog show={showAuthDialog} />}
    </div>
  );
}
