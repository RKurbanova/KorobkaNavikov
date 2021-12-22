import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link } from "blitz"
import styles from "./style.module.scss"

export function Teach() {
  const currentUser = useCurrentUser()

  return (
    <div className={styles.teach}>
      {currentUser?.role !== "TEACHER" ? (
        <>
          <h1>Неси свои светлые мысли в массы, стань преподователем Коробки Навыков!</h1>
          <h2>Чтобы добавить свой курс, создайте аккаунт учителя</h2>
        </>
      ) : (
        <>
          <h1>Неси свои светлые мысли в массы!</h1>

          <Link href={"/cource/create"}>
            <a className={styles.button}>
              <strong>Создать курс</strong>
            </a>
          </Link>
        </>
      )}
    </div>
  )
}

export default Teach
