import Layout from "app/core/layouts/Layout"
import Cource from "app/cource/components/cource/Cource"
import { Suspense } from "react"

export function CourcePage() {
  return (
    <Suspense fallback="Loading...">
      <div>
        <Cource />
      </div>
    </Suspense>
  )
}

CourcePage.authenticate = true
CourcePage.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default CourcePage
