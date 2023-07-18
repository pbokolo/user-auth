import React, { useEffect, useState } from "react";

import AuthDialog from "../components/AuthDialog";
import AuthCTA from "../components/AuthCTA";
import { firebase } from "../../firebase/firebase";
import UserCard from "../components/UserCard";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    //Effect : listens to authentication state
    let listener = firebase.getAuth().onAuthStateChanged((user) => {
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

  return (
    <div className="page">
      {user ? (
        <UserCard user={user} />
      ) : (
        <AuthCTA clickHandler={handleOpenAuthDialog} />
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
