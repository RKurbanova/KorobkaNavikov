import { Head, BlitzLayout } from "blitz"

import styles from "./styles.module.scss"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "KorobkaNavikov"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@300;400;500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.header__nav}>
            <div className={styles.header__titleConteiner}>КоробкаНавыков</div>
            <div className={styles.header__links}>
              <a href="#" className={styles.header__link}>
                Моё обучение
              </a>
              <a href="#" className={styles.header__link}>
                Преподование
              </a>
            </div>
          </div>
        </header>
        {children}
        <div className={styles.footer}>footer</div>
      </div>
    </>
  )
}

export default Layout
