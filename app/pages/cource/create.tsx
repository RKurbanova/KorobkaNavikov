import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import CreateCource from "app/cource/components/createCource/CreateCource"
import { useRouter } from "blitz"
import { Suspense, useEffect } from "react"

export function CourceCreatePage() {
  const currentUser = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (currentUser?.role !== "TEACHER") {
      router.push("/catalog")
    }
  }, [currentUser?.role, router])

  return (
    <Suspense fallback="Loading...">
      <div>
        <CreateCource />
      </div>
    </Suspense>
  )
}

CourceCreatePage.authenticate = true
CourceCreatePage.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default CourceCreatePage
