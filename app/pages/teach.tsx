import { Head, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Teach from "app/teach/components/Teach"
import { Suspense } from "react"

const TeachPage: BlitzPage = () => {

  return (
    <>
      <Head>
        <title>Teach</title>
      </Head>
      <Suspense fallback="Loading...">
        <div>
          <Teach/>
        </div>
      </Suspense>
    </>
  )
}

TeachPage.authenticate = true
TeachPage.getLayout = (page) => <Suspense fallback="Loading..."><Layout>{page}</Layout></Suspense>

export default TeachPage
