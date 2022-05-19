import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.Init";
import Loading from "./Loading";
import useAdmin from "../componetns/Hooks/useAdmin";

const RequerAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequerAdmin;
