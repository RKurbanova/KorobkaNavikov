import { resolver, NotFoundError } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async () => {
  const cources = await db.cource.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  if (!cources) throw new NotFoundError()

  return cources
})
