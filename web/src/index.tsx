import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
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

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
