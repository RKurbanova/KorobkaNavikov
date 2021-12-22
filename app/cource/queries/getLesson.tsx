import db from "db"

export default async function getLesson({ courceId, id }) {
  const user = await db.lesson.findFirst({
    where: { id, courceId },
  })

  return user
}
