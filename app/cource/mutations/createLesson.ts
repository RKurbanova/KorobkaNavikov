import { resolver, SecurePassword } from "blitz"
import db from "db"
import { Lesson } from "app/auth/validations"

export default resolver.pipe(resolver.zod(Lesson), async ({ name, text, courceId }) => {
  const cource = await db.lesson.create({
    data: {
      name,
      text,
      courceId,
    },
    select: {
      id: true,
      name: true,
      text: true,
    },
  })

  return cource
})
