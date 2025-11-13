import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Authentication/AuthPages/firebase";
export const Authcontext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   login with google
  const providerGoogle = new GoogleAuthProvider();

  function googleLogIn() {
    return signInWithPopup(auth, providerGoogle);
  }
  //   create user
  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //   updateuser
  function updateUser(updatedData) {
    return updateProfile(auth.currentUser, updatedData);
  }
  // login user
  function logIn(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout user
  function logOut() {
    return signOut(auth);
  }

  //   setting observer
  useEffect(() => {
    const unmount = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unmount();
  }, []);

  console.log(user);

  const sharedData = {
    user,
    setUser,
    googleLogIn,
    createUser,
    updateUser,
    logIn,
    logOut,
  };

  return <Authcontext value={sharedData}>{children}</Authcontext>;
}
