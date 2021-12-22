import { Suspense, useEffect } from "react"
import { Link, BlitzPage, useMutation, Routes, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"

const Home: BlitzPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/catalog")
  }, [router])

  return (
    <div className="container">
      <Suspense fallback="Loading..."></Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Home">{page}</Layout>
  </Suspense>
)

export default Home
