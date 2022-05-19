import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../firebase.Init";

const LogOut = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div>
      <button onClick={handleLogOut}> LogOut</button>
    </div>
  );
};

export default LogOut;
