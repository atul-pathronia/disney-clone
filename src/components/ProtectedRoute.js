import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";

const ProtectedRoute = ({ children }) => {
  const username = useSelector(selectUserName);
  console.log(username);
  if (!username) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
