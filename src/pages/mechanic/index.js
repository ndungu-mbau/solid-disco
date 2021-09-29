import React from "react"
import { useRoutes } from "hookrouter"

import Login from "./login"

const routes = {
  '/login': () => <Login />
}

const MechanicsRoutes = props => {
  const routeRes = useRoutes(routes)
  return (
    <>
    {routeRes}
    </>
  )
}

export default MechanicsRoutes