import { z } from "zod"

export const name = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(100)
  .transform((str) => str.toLowerCase().trim())

export const photo = z.string().optional()
export const photoFile = z.unknown()

export const lastname = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(100)
  .transform((str) => str.toLowerCase().trim())

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const SignupForm = z.object({
  email,
  password,
  name,
  lastname,
  photo: photoFile,
  isTeacher: z.boolean(),
})

export const Signup = z.object({
  email,
  password,
  name,
  lastname,
  photo,
  role: z.string(),
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})

export const Cource = z.object({
  name: z.string().min(5),
  image: z.string(),
  description: z.string().min(10),
  about: z.string().min(10),
  targets: z.string().min(10),
  lesson: z.string().min(10),
  program: z.string().min(10),
})

export const CourceForm = z.object({
  name: z.string().min(5),
  image: z.unknown(),
  description: z.string().min(10),
  about: z.string().min(10),
  targets: z.string().min(10),
  lesson: z.string().min(10),
  program: z.string().min(10),
})

export const LessonForm = z.object({
  name: z.string().min(5),
  text: z.string().min(10),
})

export const Lesson = z.object({
  name: z.string().min(5),
  text: z.string().min(10),
  courceId: z.string(),
})
