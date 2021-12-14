import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const ITEMS_PER_PAGE = 10

export function UserInfo() {
  const user = useCurrentUser()
  console.log(user)
  return (
    <div>
      {user?.name}
    </div>
  )
}

export default UserInfo
