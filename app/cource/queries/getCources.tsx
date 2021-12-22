import db from "db"

export default async function getCources({ ids }) {
  const user = await db.cource.findMany({
    where: { id: { in: ids } },
    select: {
      name: true,
      image: true,
      description: true,
      about: true,
      targets: true,
      lesson: true,
      program: true,
      lessons: true,
    },
  })

  return user
}
