import Layout from "app/core/layouts/Layout"
import UserInfo from "app/profile/components/UserInfo/UserInfo"
import React, { Suspense } from "react"

export function Profile() {
  return (
  <Suspense fallback="Loading...">
    <div><UserInfo/></div>
  </Suspense>)


}

Profile.getLayout = (page) => <Layout title="Title">{page}</Layout>

export default Profile
