import { resolver, paginate } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async ({ skip, take, searchQuery }) => {
  const where = {
    name: {
      contains: searchQuery,
      mode: "insensitive",
    },
  }

  const {
    items: cources,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () =>
      db.cource.count({
        where: {
          name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        },
      }),
    query: (paginateArgs) =>
      db.cource.findMany({
        ...paginateArgs,
        select: {
          id: true,
          name: true,
        },
        where: {
          name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        },
      }),
  })

  return {
    cources,
    count,
  }
})
