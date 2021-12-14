import { Head, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import SearchBar from "app/catalog/components/SearchBar/SearchBar"
import CourceList from "app/catalog/components/CourceList/CourceList"
import React, { Suspense, useState } from "react"

const CatalogsPage: BlitzPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Head>
        <title>Catalogs</title>
      </Head>

      <Suspense fallback="Loading...">
        <SearchBar onSearch={setSearchQuery} />
        <CourceList searchQuery={searchQuery} />
      </Suspense>
    </>
  )
}

CatalogsPage.authenticate = true
CatalogsPage.getLayout = (page) => <Layout>{page}</Layout>

export default CatalogsPage
