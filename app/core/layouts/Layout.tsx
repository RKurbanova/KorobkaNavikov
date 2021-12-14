import { Head, BlitzLayout } from "blitz"
import Link from 'next/link'
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
            <div className={styles.header__titleConteiner}>Коробка Навыков</div>
            <div className={styles.header__links}>
              <a href="#" className={styles.header__link}>
                Моё обучение
              </a>
              <a href="#" className={styles.header__link}>
                Преподование
              </a>
              <Link href="/profile">
                <a className={styles.header__link + " " + styles.header__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="30" height="30"
                  viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM55.82161,51.89115c0.56572,0.10356 1.1137,0.3354 1.6125,0.71667c5.5728,4.25987 11.72816,6.8757 14.90443,8.0625c4.27133,-1.3932 8.85692,-2.19479 13.66146,-2.19479c4.80453,0 9.39012,0.80159 13.66146,2.19479c3.17627,-1.19253 9.33163,-3.80837 14.90443,-8.0625c1.9952,-1.52507 4.88972,-0.73817 5.76692,1.6125c2.52267,6.7596 5.80052,20.04929 5.80052,40.37969c0,19.94627 -17.974,36.12448 -40.13333,36.12448c-22.15933,0 -40.13333,-16.17821 -40.13333,-36.12448c0,-20.3304 3.27785,-33.62009 5.80052,-40.37969c0.6579,-1.763 2.45727,-2.63984 4.15443,-2.32917zM68.8,80.26667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM103.2,80.26667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM80.26667,103.2c0,3.1648 2.56853,5.73333 5.73333,5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333z"></path></g></g></svg>
                </a>
              </Link>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          {children}
        </div>
        <div className={styles.footer}>footer</div>
      </div>
    </>
  )
}

export default Layout
