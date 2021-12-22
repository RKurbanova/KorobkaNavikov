import { resolver, SecurePassword } from "blitz"
import db from "db"

export default resolver.pipe(async ({ user, id }) => {
  const newUser = db.user.update({
    where: { id: user.id },
    data: {
      courcesIds: [...user.courcesIds, id],
    },
  })

  return newUser
})
