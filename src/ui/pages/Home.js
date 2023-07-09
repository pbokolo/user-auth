import React, { useState } from "react";

import AuthDialog from "../components/AuthDialog";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showAuthDialog, setAuthDialog] = useState(!user);

  const handleCloseAuthDialog = (e) => {
    if (
      e.target.id !== "overlay" &&
      e.target.id !== "close" &&
      e.target.id !== "close__icon"
    )
      return;
    setAuthDialog(false);
  };

  const handleOpenAuthDialog = () => {
    setAuthDialog(true);
  };

  return (
    <div className="page">
      {user ? (
        "Welcome home"
      ) : (
        <div className="btn btn--primary" onClick={handleOpenAuthDialog}>
          sign in to continue
        </div>
      )}
      {showAuthDialog ? (
        <AuthDialog
          show={showAuthDialog}
          closeHandler={handleCloseAuthDialog}
        />
      ) : (
        ""
      )}
    </div>
  );
}
