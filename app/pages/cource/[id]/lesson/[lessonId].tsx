import Layout from "app/core/layouts/Layout"
import Lesson from "app/cource/components/lesson/Lesson"
import { Suspense } from "react"

export function LessonPage() {
  return (
    <Suspense fallback="Loading...">
      <div>
        <Lesson />
      </div>
    </Suspense>
  )
}

LessonPage.authenticate = true
LessonPage.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default LessonPage
