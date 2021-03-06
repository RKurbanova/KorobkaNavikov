import Layout from "app/core/layouts/Layout"
import UserInfo from "app/profile/components/UserInfo/UserInfo"
import React, { Suspense } from "react"

export function Profile() {
  return (
    <Suspense fallback="Loading...">
      <div>
        <UserInfo />
      </div>
    </Suspense>
  )
}

Profile.authenticate = true
Profile.getLayout = (page) => (
  <Suspense fallback="Loading...">
    <Layout title="Title">{page}</Layout>
  </Suspense>
)

export default Profile
