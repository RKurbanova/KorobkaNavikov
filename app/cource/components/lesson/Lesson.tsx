import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import getLesson from "app/cource/queries/getLesson"
import { useQuery } from "blitz"
import { useRouter } from "next/router"
import styles from "./style.module.scss"

export function Lesson() {
  const user = useCurrentUser()
  const router = useRouter()
  const { id, lessonId } = router.query

  const [lesson] = useQuery(getLesson, { id: lessonId, courceId: id })
  return (
    <div className={styles.cource}>
      <div className={styles.cource__header}>
        <div className={styles.cource__headerName}>
          <div className={styles.cource__name}>
            <h1>{lesson?.name}</h1>
          </div>
        </div>
      </div>
      <div className={styles.cource__block}>
        <h2>Содержание урока</h2>
        <div className={styles.cource__about}>{lesson?.text}</div>
      </div>
    </div>
  )
}

export default Lesson
