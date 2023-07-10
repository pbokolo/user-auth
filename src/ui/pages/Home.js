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
        setShowAuthDialog(true);
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

  return (
    <div className="page">
      {user ? "Welcome home" : <AuthCTA clickHandler={handleOpenAuthDialog} />}
      {showAuthDialog ? (
        <AuthDialog show={showAuthDialog} showSetter={setShowAuthDialog} />
      ) : (
        ""
      )}
    </div>
  );
}
