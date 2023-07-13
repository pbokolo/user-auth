import React, { useEffect, useState } from "react";

import AuthDialog from "../components/AuthDialog";
import AuthCTA from "../components/AuthCTA";
import { firebase } from "../../firebase/firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    //Effect : listens to authentication state
    let listener = firebase.getAuth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      setUser(user);
    });

    return () => {
      listener();
    };
  });

  const handleOpenAuthDialog = () => {
    setShowAuthDialog(true);
  };

  const handleCloseAuthDialog = (e) => {
    const closers = ["overlay", "close", "close__icon"];
    const { id } = e.target;

    if (!id) return;
    if (!closers.includes(id)) return;
    setShowAuthDialog(false);
  };
  console.log(showAuthDialog);
  return (
    <div className="page">
      {user ? "Welcome home" : <AuthCTA clickHandler={handleOpenAuthDialog} />}
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
