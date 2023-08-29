import React from "react";
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import GlobalStyles from "./GlobalStyles";
import { SearchProvider } from "./contexts/SearchContext";
import Header from "./components/Header/Header";
import AppRoutes from "./Routes";

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
      <GlobalStyles />
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
  </ApolloProvider>
);
