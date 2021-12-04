import { Head, BlitzLayout } from "blitz"

import styles from "./styles.module.scss"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "KorobkaNavikov"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>header</div>
      {children}
      <div className={styles.header}>footer</div>
    </>
  )
}

export default Layout
