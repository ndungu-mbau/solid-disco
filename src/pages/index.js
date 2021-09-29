import Mechanics from "./mechanic"
import Users from "./users"

const routes = {
  '/mechanics*': () => <Mechanics />,
  '/users*': () => <Users />
}

export default routes