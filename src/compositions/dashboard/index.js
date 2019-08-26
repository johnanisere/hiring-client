import React from "react";

import Layout from "../../components/Layout";
import Cards from "../../components/dashboard/Cards";
import ProtectedRoute from "../../components/ProtectedRoute";
import Profile from "../../components/profile";
import { useSelector } from "react-redux";

export default function App(props) {
  const { role } = useSelector(({ user }) => user.data);
  return (
    <ProtectedRoute>
      {role === "dev" ? (
        <Profile />
      ) : (
        <Layout>
          <Cards />
        </Layout>
      )}
    </ProtectedRoute>
  );
}
