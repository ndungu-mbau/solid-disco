import React from "react"
import { useRoutes } from "hookrouter"

import Login from "./login"

const routes = {
  '/login': () => <Login />
}

const UsersRoutes = props => {
  const routeRes = useRoutes(routes)
  return (
    {routeRes}
  )
}

export default UsersRoutes