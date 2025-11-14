import React, { useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(Authcontext);
  const loacaiton = useLocation();

  if (loading) {
    return <h1>mama loading hoitaseeeeeeeeeeeeeee</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={loacaiton.pathname} to="/login" />;
}
