import { useMutation, useRouter } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LessonForm } from "app/auth/validations"
import createLesson from "app/cource/mutations/createLesson"

export const CreateLesson = () => {
  const router = useRouter()
  const [lessonMutation] = useMutation(createLesson)
  const { id } = router.query

  return (
    <div>
      <h1>Create a Lesson</h1>

      <Form
        submitText="Create a Lesson"
        schema={LessonForm}
        initialValues={{
          name: "",
          text: "",
        }}
        onSubmit={async (values) => {
          try {
            const lesson = await lessonMutation({ ...values, courceId: id as string })
            router.push(`/cource/${id}/lesson/${lesson.id}`)
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
        <LabeledTextField isArea name="text" label="Text" placeholder="Text" type="text" />
      </Form>
    </div>
  )
}

export default CreateLesson
