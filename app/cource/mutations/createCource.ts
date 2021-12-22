import { resolver, SecurePassword } from "blitz"
import db from "db"
import { Cource } from "app/auth/validations"

export default resolver.pipe(
  resolver.zod(Cource),
  async ({ name, description, targets, lesson, about, image, program }) => {
    const cource = await db.cource.create({
      data: {
        description,
        targets,
        name,
        about,
        lesson,
        image,
        program,
      },
      select: {
        id: true,
        name: true,
        description: true,
        targets: true,
        lesson: true,
        about: true,
        image: true,
        program: true,
      },
    })

    return cource
  }
)
