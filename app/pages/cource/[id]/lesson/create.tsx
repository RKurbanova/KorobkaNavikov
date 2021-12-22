import Layout from "app/core/layouts/Layout"
import CreateLesson from "app/cource/components/createLesson/CreateLesson"
import { Suspense } from "react"

export function CreateLearnPage() {
  return (
    <Suspense fallback="Loading...">
      <div>
        <CreateLesson />
      </div>
    </Suspense>
  )
}

CreateLearnPage.authenticate = true
CreateLearnPage.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default CreateLearnPage
