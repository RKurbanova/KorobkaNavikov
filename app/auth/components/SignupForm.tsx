import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupForm as SignupFormSchema } from "app/auth/validations"
import ImgField from "app/core/components/ImgInput"
import Checkbox from "app/core/components/Checkbox"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <div>
      <h1>Create an Account</h1>

      <Form
        submitText="Create Account"
        schema={SignupFormSchema}
        initialValues={{
          email: "",
          password: "",
          name: "",
          lastname: "",
          photo: null,
          isTeacher: false,
        }}
        onSubmit={async (values) => {
          try {
            var fr = new FileReader()
            fr.onload = async function () {
              await signupMutation({
                ...values,
                photo: fr.result as string,
                role: values.isTeacher ? "TEACHER" : "USER",
              })
              props.onSuccess?.()
            }
            if (values.photo) {
              fr.readAsDataURL(values.photo as Blob)
            } else {
              await signupMutation({
                ...values,
                photo: undefined,
                role: values.isTeacher ? "TEACHER" : "USER",
              })
              props.onSuccess?.()
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
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="name" label="Name" placeholder="Name" type="text" />
        <ImgField name="photo" label="Photo" placeholder="Photo" />
        <Checkbox name="isTeacher" label="Is Teacher" placeholder="Is Teacher" />
        <LabeledTextField name="lastname" label="Lastname" placeholder="Lastname" type="text" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
      </Form>
    </div>
  )
}

export default SignupForm
