import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import client from "./graphql/apolloClient";
import UsersPage from "./pages/Users";
import UserDetails from "./pages/UserDetails";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration.scope);
      })
      .catch((error) => {
        console.log("Falha no registro do Service Worker:", error);
      });
  });
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
