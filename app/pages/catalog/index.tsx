import { Head, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import SearchBar from "app/catalog/components/SearchBar/SearchBar"
import CourceList from "app/catalog/components/CourceList/CourceList"
import React, { Suspense } from "react"

const CatalogsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Catalogs</title>
      </Head>

      <Suspense fallback="Loading...">
        <div className="container">
          Temp catalog
          <SearchBar />
          <CourceList />
        </div>
      </Suspense>
    </>
  )
}

CatalogsPage.authenticate = true
CatalogsPage.getLayout = (page) => <Layout>{page}</Layout>

export default CatalogsPage
