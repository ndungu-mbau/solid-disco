import React from "react"
import { useRoutes } from "hookrouter"
import { ApolloProvider } from "@apollo/client"

import client from "./utils/client"

import routes from "./pages"

function App() {
  const routeRes = useRoutes(routes)
  return (
    <ApolloProvider client={client}>
      {routeRes}
    </ApolloProvider>
  );
}

export default App;
