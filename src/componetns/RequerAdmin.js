import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.Init";
import useAdmin from "./Hooks/useAdmin";
import Loading from "./Loading";

const RequirAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || !admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequirAuth;
