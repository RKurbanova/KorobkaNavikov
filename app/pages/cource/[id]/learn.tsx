import Layout from "app/core/layouts/Layout"
import LearnCource from "app/cource/components/learnCource/LearnCource"
import { Suspense } from "react"

export function LearnPage() {
  return (
    <Suspense fallback="Loading...">
      <div>
        <LearnCource />
      </div>
    </Suspense>
  )
}

LearnPage.authenticate = true
LearnPage.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default LearnPage
