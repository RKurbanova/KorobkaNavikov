import { useMutation, useRouter } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { CourceForm } from "app/auth/validations"
import ImgField from "app/core/components/ImgInput"
import createCource from "app/cource/mutations/createCource"

export const CreateCource = () => {
  const router = useRouter()
  const [courceMutation] = useMutation(createCource)

  return (
    <div>
      <h1>Create a Cource</h1>

      <Form
        submitText="Create a Cource"
        schema={CourceForm}
        initialValues={{
          description: "",
          name: "",
          about: "",
          targets: "",
          lesson: "",
          program: "",
          image: null,
        }}
        onSubmit={async (values) => {
          try {
            var fr = new FileReader()
            fr.onload = async function () {
              const cource = await courceMutation({
                ...values,
                image: fr.result as string,
              })
              router.push(`/cource/${cource.id}`)
            }
            if (values.image) {
              fr.readAsDataURL(values.image as Blob)
            } else {
              throw new Error("Choose image!")
            }
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
        <LabeledTextField
          isArea
          name="description"
          label="Description"
          placeholder="Description"
          type="text"
        />
        <LabeledTextField isArea name="about" label="About" placeholder="About" type="text" />
        <LabeledTextField isArea name="targets" label="Targets" placeholder="Targets" type="text" />
        <LabeledTextField isArea name="lesson" label="Lesson" placeholder="Lesson" type="text" />
        <LabeledTextField isArea name="program" label="Program" placeholder="Program" type="text" />
        <ImgField name="image" label="Image" placeholder="Image" />
      </Form>
    </div>
  )
}

export default CreateCource
