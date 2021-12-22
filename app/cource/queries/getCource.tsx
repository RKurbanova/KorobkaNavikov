import db from "db"

export default async function getCource({ id }) {
  const user = await db.cource.findFirst({
    where: { id },
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
